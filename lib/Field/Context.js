import { Generator, Context as BaseContext } from '@abw/react-context'
import { defaultConfig, defaultStatus, stateStatus } from './Config.js'
import { callFunctions } from '../Utils.js'
import { BLUR, CHANGED, FOCUS, INVALID, RESET, VALID, VALIDATING } from '../Constants.jsx'
import { createRef } from 'react'
import { isString } from '@abw/badger-utils'
//import { sleep } from '../Utils.js'

class FieldContext extends BaseContext {
  static debug       = false
  static debugPrefix = 'Field > '
  static debugColor  = 'teal'
  static actions     = [
    // 'set', 'focus', 'blur',
    //'setStatus',
    //'setChanged',
    //'setValidating', 'setValid', 'setInvalid',
    //'setFocus', 'setBlur',
    //'set',
    'onFocus', 'onBlur', 'onChange'
  ]
  constructor(props) {
    super(props)
    this.name = props.name
    // this.debug(`field constructor for ${props.name}:`, props)

    // this.debug('field props:', props)
    const config = Object.entries(defaultConfig).reduce(
      (options, [key, value]) => {
        options[key] = props[key] ?? value
        return options
      },
      { }
    )
    this.debug('field config:', config)
    const {
      value,
    } = props
    const initialValue = value

    this.form = this.props.form
    this.state = {
      ...this.state,
      ...config,
      status: { ...defaultStatus },
      initialValue,
      value,
      error: null
    }

    this.inputRef = createRef()
    this.resetRef = createRef()

    if (this.props.onLoad) {
      this.props.onLoad(this)
    }
  }
  componentDidMount() {
    this.debug('componentDidMount')
    this.mounted = true
    this.form.attachField(this.props.name, this)
  }
  componentWillUnmount() {
    this.debug('componentWillUnmount')
    this.mounted = false
    this.form.detachField(this.props.name)
  }

  //--------------------------------------------------------------------------
  // Status
  //--------------------------------------------------------------------------
  setStatus(status, state={}, callback) {
    if (! this.mounted) {
      return
    }
    const newStatus = isString(status)
      ? (stateStatus[status] || { [status]: true })
      : status
    const newState = {
      status: {
        ...this.state.status,
        ...newStatus,
      },
      ...state
    }
    console.log('newState: ', newState)

    this.setState(
      newState,
      callback
        ? () => callback(this.getContext())
        : null
    )
    return newState
  }
  setChangedState(state, callback) {
    return this.setStatus(CHANGED, state, callback)
  }
  setValidatingState(state, callback) {
    return this.setStatus(VALIDATING, state, callback)
  }
  setValidState(state, callback) {
    return this.setStatus(VALID, state, callback)
  }
  setInvalidState(state, callback) {
    return this.setStatus(INVALID, state, callback)
  }
  setResetState(state, callback) {
    return this.setStatus(RESET, state, callback)
  }
  setFocusState(state, callback) {
    return this.setStatus(FOCUS, state, callback)
  }
  setBlurState(state, callback) {
    return this.setStatus(BLUR, state, callback)
  }

  //--------------------------------------------------------------------------
  // Focus and blur
  //--------------------------------------------------------------------------
  onFocus() {
    this.setFocusState({ }, this.props.onFocus)
  }
  onBlur() {
    this.setBlurState(
      { },
      this.state.validateOnBlur
        ? this.validate(this.props.onBlur)
        : this.props.onBlue
    )
  }
  setFocus() {
    // imperatively focus
    this.inputRef?.current?.focus()
  }

  //--------------------------------------------------------------------------
  // Change and reset
  //--------------------------------------------------------------------------
  onChange(input) {
    const value = this.props.prepareValue
      ? this.props.prepareValue(input)
      : input

    const { invalid } = this.state.status
    const {
      validateOnChange,
      validateOnInvalid,
      minValidateLength
    } = this.state
    const length = value?.length ?? 0
    let validate = validateOnChange || (validateOnInvalid && invalid)

    // don't validate if it's a short input < minValidateLength
    // NO, this is wrong - we need to revalidate if we had an invalid input
    // (e.g. length > maxLength) and then we've backspace to bring it back
    // in line, or if we had a valid/invalid message when the length was
    // over the threshold and we've backspaced to bring it back under
    if (length < minValidateLength && ! invalid) {
      validate = false
    }

    this.setChangedState(
      { value },
      () => {
        this.form.setValue(this.props.name, value)
        if (validate) {
          this.validate(this.props.onChange)
        }
        else {
          //this.setValidatingState({ message: null })
          if (this.props.onChange) {
            this.props.onChange(this.getContext())
          }
        }
      }
    )
  }
  setValue(value) {
    // JFDI - set the value, no side-effects
    this.setState({ value })
  }
  reset() {
    const value = this.props.prepareValue
      ? this.props.prepareValue(this.state.initialValue)
      : this.state.initialValue
    this.setResetState(
      { value },
      () => this.resetRef?.current?.reset()
    )
    return value
  }
  validate(callback) {
    this.debug('validate()')
    const result = {
      name:  this.name,
      label: this.props.label
    }
    return new Promise( this.validator() )
      .then(
        state => {
          this.setValidState(
            state,
            callFunctions(this.props.onValid, callback)
          )
          return {
            ...result,
            ...state
          }
        }
      )
      .catch(
        state => {
          // console.log('UNCAUGHT VALIDATION ERROR: ', state)
          this.setInvalidState(
            state,
            callFunctions(this.props.onInvalid, callback)
          )
          throw {
            ...result,
            ...state
          }
        }
      )
  }
  validator() {
    return (resolve, reject) => {
      const {
        value='', validate, required, requiredMessage, validMessage,
      } = this.state
      const length = value?.length ?? 0
      const empty  = length === 0
      // let validate = validateOnChange || (validateOnInvalid && invalid)

      //if (length < minValidateLength && ! invalid) {
      //  this.debug(`length of ${this.name} field is less than minValidateLength`)
      //  resolve({ message: '' })
      //}

      this.setValidatingState()

      if (validate) {
        // if there's a validate property then we run it
        this.debug(`calling validate function for ${this.name} field`)
        const field = this.getContext()
        validate(field.value, field)
          .then(
            value => {
              this.debug(`validation passed for ${this.name} field - returned value is`, value)
              resolve({ value, message: validMessage })
            }
          )
          .catch(
            err => {
              this.debug(`validation failed for ${this.name} field - caught error is`, err)
              const message = isString(err)
                ? err
                : err.message
              reject({ message })
            }
          )
      }
      else if (empty) {
        // an empty field is an error if it's required, otherwise
        // is an acceptable state of affairs.
        if (required) {
          this.debug(`failing validation for ${this.name} field - required field is empty`)
          reject({ message: requiredMessage })
        }
        else {
          this.debug(`passing validation for ${this.name} field - value is empty but not required`)
          resolve({ value, message: validMessage })
        }
      }
      else {
        this.debug(`no validation defined for ${this.name} field`)
        resolve({ value, message: null })
      }
    }
  }

  setRef(r) {
    // used to store a reference to an input component so that we can reset it
    // if the server-side form validation fails (e.g. in the case of recaptcha)
    // where the user must peform the "I'm not a robot" check again.
    this.ref = r
  }

  OLDset(input) {
    const value = this.props.prepareValue
      ? this.props.prepareValue(input)
      : input
    // TODO: validate on change
    this.setChangedState(
      { value },
      () => this.form.setValue(this.props.name, value)
    )
  }


  getContext() {
    const context = {
      ...this.props,
      ...this.state,
      ...this.actions,
      name: this.name,
      inputRef: this.inputRef,
      resetRef: this.resetRef,
      setRef:   this.resetRef,      // OLD name
    }
    delete context.form
    delete context.children
    delete context.render
    // console.log('field context: ', context)

    return context
  }
}

const generated = Generator(FieldContext)
export const { Context, Provider, Consumer, Use: useField } = generated
export default generated