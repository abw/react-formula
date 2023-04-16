import { Generator, Context as BaseContext } from '@abw/react-context'
import { defaultConfig, defaultStatus, stateStatus } from './Config.js'
import { isString } from '../Utils.js'
import { BLUR, CHANGED, FOCUS, INVALID, RESET, VALID, VALIDATING } from '../Constants.jsx'
import { createRef } from 'react'
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
    'set', 'onFocus', 'onBlur'
  ]
  constructor(props) {
    super(props)
    this.name = props.name
    // this.debug(`field constructor for ${props.name}:`, props)

    const config = Object.entries(defaultConfig).reduce(
      (options, [key, value]) => {
        options[key] = props[key] ?? value
        return options
      },
      { }
    )
    const {
      value,
    } = props
    const initialValue = value

    this.form = this.props.form
    this.state = {
      ...this.state,
      status: { ...defaultStatus },
      initialValue,
      value,
      config,
      error: null
    }

    this.inputRef = createRef()

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
    this.setState(
      {
        status: {
          ...this.state.status,
          ...newStatus,
        },
        ...state
      },
      callback
        ? () => callback(this.getContext())
        : null
    )
  }
  setChangedState(state, callback) {
    this.setStatus(CHANGED, state, callback)
  }
  setValidatingState(state, callback) {
    this.setStatus(VALIDATING, state, callback)
  }
  setValidState(state, callback) {
    this.setStatus(VALID, state, callback)
  }
  setInvalidState(state, callback) {
    this.setStatus(INVALID, state, callback)
  }
  setResetState(state, callback) {
    this.setStatus(RESET, state, callback)
  }
  setFocusState(state, callback) {
    this.setStatus(FOCUS, state, callback)
  }
  setBlurState(state, callback) {
    this.setStatus(BLUR, state, callback)
  }

  setRef(r) {
    // used to store a reference to an input component so that we can reset it
    // if the server-side form validation fails (e.g. in the case of recaptcha)
    // where the user must peform the "I'm not a robot" check again.
    this.ref = r
  }

  set(input) {
    const value = this.props.prepareValue
      ? this.props.prepareValue(input)
      : input
    // TODO: validate on change
    this.setChangedState(
      { value },
      () => this.form.setValue(this.props.name, value)
    )
  }
  reset() {
    const value = this.props.prepareValue
      ? this.props.prepareValue(this.state.initialValue)
      : this.state.initialValue
    this.setResetState(
      { value },
      () => {
        //if (this.inputRef) {
        //  this.inputRef.reset()     // TODO: component ref vs input ref
        //}
      }
    )
  }

  onFocus() {
    this.setFocusState({ }, this.props.onFocus)
  }
  onBlur() {
    this.setBlurState({ }, this.props.onBlur)
  }
  setFocus() {
    // imperatively focus
    this.inputRef?.current?.focus()
  }

  getContext() {
    const context = {
      ...this.props,
      ...this.state,
      ...this.actions,
      name: this.name,
      inputRef: this.inputRef
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