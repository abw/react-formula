import { Generator, Context as BaseContext } from '@abw/react-context'
import { CHANGED, INVALID, RESET, SUBMITTED, SUBMITTING, VALID, VALIDATING } from '../Constants.jsx'
import { defaultConfig, defaultStatus, stateStatus } from './Config.js'
import { isString, sleep, doNothing } from '@abw/badger-utils'

class FormContext extends BaseContext {
  static initialState = {
  }
  static initialProps = {
  }

  static debug       = false
  static debugPrefix = 'Form > '
  static debugColor  = 'rebeccapurple'
  static actions     = [
    'fieldSpec', 'attachField', 'detachField',
    'setFocus',
    'reset',
    'validate',
    'submit',
    'setValue', 'setValues', 'setHidden',

    // these probably should be kept internal
    'setStatus',
    'setChangedState',
    'setValidatingState', 'setValidState', 'setInvalidState',
    'setSubmittingState', 'setSubmittedState',
  ]

  constructor(props) {
    super(props)
    this.fields = { }

    const config = Object.entries(defaultConfig).reduce(
      (options, [key, value]) => {
        options[key] = props[key] ?? value
        return options
      },
      { }
    )
    this.debug('form config:', config)
    const {
      fields={ },
      values={ },
      hidden={ }
    } = props
    //const initialFields = fields
    const initialValues = { ...values, ...hidden }

    this.state = {
      ...this.state,
      fields,
      initialValues,
      values: { ...initialValues },
      status: { ...defaultStatus },
      config,
      errors: [ ],
      error: null
    }
    if (this.props.onLoad) {
      this.props.onLoad(this)
    }
  }
  componentDidMount() {
    this.debug('mounted')
    this.mounted = true
  }
  componentWillUnmount() {
    this.debug('unmounted')
    this.mounted = false
  }

  // Fields
  fieldSpec(name, props) {
    //const {
    //  showRequired, showOptional,
    //  requiredText, optionalText
    //} = this.state.config
    const defaults = this.props.fields?.[name] ?? { }
    const value    = this.props.values?.[name]
    return {
      name,
      ...this.state.config,
      ...defaults,
      ...props,
      value
    }
  }

  attachField(name, field) {
    this.debug('attaching [%s] field => %o', name, field)
    this.fields[name] = field
  }

  detachField(name) {
    this.debug('detaching [%s] field', name)
    delete this.fields[name]
  }

  //--------------------------------------------------------------------------
  // Status and state
  //--------------------------------------------------------------------------
  setStatus(status, state={}, callback=doNothing) {
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
  setSubmittingState(state, callback) {
    this.setStatus(SUBMITTING, state, callback)
  }
  setSubmittedState(state, callback) {
    this.setStatus(SUBMITTED, state, callback)
  }
  setResetState(state, callback) {
    this.setStatus(RESET, state, callback)
  }

  //--------------------------------------------------------------------------
  // Field focus
  //--------------------------------------------------------------------------
  setFocus(name, event) {
    event?.preventDefault()
    this.fields[name]?.setFocus()
  }

  //--------------------------------------------------------------------------
  // Set/Reset
  //--------------------------------------------------------------------------
  reset() {
    if (! this.mounted) {
      return
    }
    this.resetFields()
    this.setResetState(
      {
        errors: [ ],
        error: null,
        values: { ...this.state.initialValues }
      },
      this.props.onReset
    )
  }
  resetFields() {
    Object.values(this.fields).forEach(
      field => field.reset()
    )
  }
  setValue(name, value) {
    // JFDI - called by fields when they change
    this.setChangedState({
      values: {
        ...this.state.values,
        [name]: value
      }
    })
  }
  setValues(values, event) {
    event?.preventDefault()
    Object.entries(values).forEach(
      ([name, value]) => this.fields[name]?.setValue(value)
    )
  }

  setHidden(values) {
    const hidden = {
      ...this.state.hidden,
      ...values
    }
    this.setState({ hidden })
  }

  //--------------------------------------------------------------------------
  // Submit
  //--------------------------------------------------------------------------
  submit(event) {
    event?.preventDefault()
    this.debug('submit')
    this.validate()
    //if (this.props.onSubmit) {
    //  this.props.onSubmit()
    //}
  }
  validate() {
    this.debug('validate()')
    this.setValidatingState()
    let submit = {
      values: { ...this.state.values },
      errors: [ ],
      validFields: { },
      invalidFields: { },
      nFields: Object.values(this.fields).length,
      nValid: 0,
      nInvalid: 0
    }

    Promise.all(
      Object.entries(this.fields).map(
        ([name, field]) => field.validate()
          .then(
            result => {
              this.debug(`${name} field is valid: `, result)
              submit.validFields[name] = field
              submit.nValid++
              Object.assign(submit.values, result.data || { [name]: result.value })
            }
          )
          .catch(
            result => {
              this.debug(`${name} field is NOT valid: `, result)
              submit.invalidFields[name] = field
              submit.nInvalid++
              submit.errors.push({
                name:    result.name  ?? name,
                label:   result.label ?? result.name ?? name,
                message: result.error ?? result.message
              })
              throw result
            }
          )
      )
    )
      .then(
        () => {
          console.log('form is valid: ', submit)
        }
      )
      .catch(
        () => console.log('Form is not valid: ', submit)
      )
    //sleep(2000).then(
    //  () => this.setValidState()
    //)
  }

  //--------------------------------------------------------------------------
  // render
  //--------------------------------------------------------------------------
  getContext() {
    // console.log('props: ', this.props);
    const context = {
      // ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    }
    return context
  }
}

const generated = Generator(FormContext)
export const { Context, Provider, Consumer, Use: useForm } = generated
export default generated