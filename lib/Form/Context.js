import { Generator, Context as BaseContext } from '@abw/react-context'
import { CHANGED, INVALID, RESET, SUBMITTED, SUBMITTING, VALID, VALIDATING } from '../Constants.jsx'
import { doNothing, isString, sleep } from '../Utils.js'
import { defaultConfig, defaultStatus, stateStatus } from './Config.js'


class FormContext extends BaseContext {
  static initialState = {
  }
  static initialProps = {
    //initialFields: 'fields',
    //initialValues: 'values',
    //values: 'values',
    //errors: 'errors',
    //hidden: 'hidden',
  }

  static debug       = false
  static debugPrefix = 'Form > '
  static debugColor  = 'rebeccapurple'
  static actions     = [
    'fieldSpec', 'attachField', 'detachField',
    'setStatus',
    'setChanged',
    'setValidating', 'setValid', 'setInvalid',
    'setSubmitting', 'setSubmitted',
    'reset',
    'validate',
    'submit',
    // 'submitField',
    // 'submitForm',
    'setValue', 'setValues',
    'setValues', 'setHidden'
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

    //this.state.values = {
    //  ...this.state.values,
    //  ...this.state.hidden,
    //}
    /*
    this.state = {
      validating: false,
      submitting: false,
      errors: [ ...this.props.errors ],
      hidden: { ...this.props.hidden },
      fields: buildFields(
        this.props.fields, this.props.values
      )
    };
    */
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

  //--------------------------------------------------------------------------
  // Fields
  //--------------------------------------------------------------------------
  fieldSpec(name, props) {
    const {
      showRequired, showOptional,
      requiredText, optionalText
    } = this.state.config
    const defaults = this.props.fields?.[name] ?? { }
    const value    = this.props.values?.[name]
    return {
      name,
      showRequired,
      showOptional,
      requiredText,
      optionalText,
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
  // Status
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
  setChanged(state, callback) {
    this.setStatus(CHANGED, state, callback)
  }
  setValidating(state, callback) {
    this.setStatus(VALIDATING, state, callback)
  }
  setValid(state, callback) {
    this.setStatus(VALID, state, callback)
  }
  setInvalid(state, callback) {
    this.setStatus(INVALID, state, callback)
  }
  setSubmitting(state, callback) {
    this.setStatus(SUBMITTING, state, callback)
  }
  setSubmitted(state, callback) {
    this.setStatus(SUBMITTED, state, callback)
  }
  setReset(state, callback) {
    this.setStatus(RESET, state, callback)
  }

  //--------------------------------------------------------------------------
  // Set/Reset
  //--------------------------------------------------------------------------
  reset() {
    Object.values(this.fields).forEach(
      field => field.reset()
    )
    this.setReset(
      {
        errors: [ ],
        error: null,
        values: { ...this.state.initialValues }
      },
      this.props.onReset
    )
  }

  setValue(name, value) {
    this.setChanged({
      values: {
        ...this.state.values,
        [name]: value
      }
    })
  }
  setValues(values) {
    Object.keys(values).forEach(
      key => this.fields[key]?.setValue(values[key])
    )
  }
  setHidden(values) {
    const hidden = {
      ...this.state.hidden,
      ...values
    }
    this.setState({ hidden })
  }
  validate() {
    this.debug('validate()')
    this.setValidating()
    sleep(2000).then(
      () => this.setValid()
    )
  }

  //--------------------------------------------------------------------------
  // Submit
  //--------------------------------------------------------------------------
  submit(event) {
    this.debug('submit()')
    if (event?.preventDefault) {
      event.preventDefault()
    }
    if (this.props.onSubmit) {
      this.props.onSubmit()
    }
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
    // delete context.children
    // delete context.render
    return context
    /*
    return {
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
      //state: this.state
    }
    */
  }
}

const generated = Generator(FormContext)
export const { Context, Provider, Consumer, Use: useForm } = generated
export default generated