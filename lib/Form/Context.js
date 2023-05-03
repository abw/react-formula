import BaseContext from '../Context.js'
import { Generator } from '@abw/react-context'
import { FULFILLED, SUBMITTED, SUBMITTING } from '../Constants.jsx'
import { doNothing, extract, isArray } from '@abw/badger-utils'
import { callFunctions } from '../Utils.js'
import { formDefaultProperties, formFieldProperties } from '../Config.js'
import { newFormStatus } from '../Status.js'

class FormContext extends BaseContext {
  static newStatus    = newFormStatus
  static debug        = false
  static debugPrefix  = 'Form > '
  static debugColor   = 'rebeccapurple'
  static actions      = [
    'fieldSpec', 'attachField', 'detachField',
    'setFocus',
    'reset',
    'validate',
    'submit',
    'setValue', 'setValues', 'setHidden',

    // should this be kept internal?
    'setStatus',
    'setResetState', 'setChangedState',
    'setValidatingState', 'setValidState', 'setInvalidState',
    'setSubmittingState', 'setSubmittedState',
  ]

  constructor(props) {
    super(props)
    this.fields = { }

    const {
      fields={ },
      values={ },
      hidden={ }
    } = props
    const initialValues = { ...values, ...hidden }

    this.state = {
      ...this.state,
      fields,
      initialValues,
      values: { ...initialValues },
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
    const defaults = this.props.fields?.[name] ?? { }
    const value    = this.props.values?.[name]
    return {
      name,
      ...extract(this.props, formFieldProperties),
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
  setSubmittingState(state, callback) {
    this.setStatus(SUBMITTING, state, callback)
  }
  setSubmittedState(state, callback) {
    this.setStatus(SUBMITTED, state, callback)
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
  reset(e) {
    if (! this.mounted) {
      return
    }
    this.debug('reset()')
    e?.preventDefault()
    this.resetFields()
    /*
    this.setResetState(
      {
        errors: [ ],
        error: null,
        // values: { ...this.state.initialValues }
      },
      this.props.onReset
    )
    */
  }
  resetFields() {
    this.debug('resetFields()')
    Object.values(this.fields).forEach(
      field => {
        console.log('resetting ', field.name)
        field.reset()
      }
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
      .then( submit => this.handleSubmit(submit) )
      .catch( submit => this.debug('Form is NOT valid:', submit) )
  }
  validate() {
    this.debug('validate()')
    this.setValidatingState()

    return new Promise( this.validator() )
      .then(
        submit => {
          this.debug('validator passed: ', submit )
          this.setValidState(
            { submit, error: null, errors: [ ] },
            this.props.onValid
          )
          return submit
        }
      )
      .catch(
        submit => {
          this.debug('validator failed: ', submit )
          this.handleError({
            error: submit.error, errors: submit.errors
          })
          throw submit
        }
      )
  }

  validator() {
    return (resolve, reject) => Promise.allSettled(
      Object.values(this.fields).map(
        field => field.validate()
      )
    )
      .then(
        results => results.reduce(
          (submit, {status, value, reason}) => {
            if (status === FULFILLED) {
              Object.assign(
                submit.values,
                value.data || { [value.name]: value.value }
              )
            }
            else {
              submit.errors.push(reason)
            }
            return submit
          },
          {
            values: { ...this.state.values },
            errors: [ ],
          }
        )
      )
      .then(
        submit => {
          this.debug('field validation complete: ', submit)
          if (submit.errors.length) {
            reject(submit)
          }
          return submit
        }
      )
      .then(
        submit => {
          if (this.props.validate) {
            this.debug('validating form: ', submit)
            return this.props.validate(submit.values)
              .then( values => resolve({ ...submit, values }) )
              .catch( failed => reject(failed) )
          }
          resolve(submit)
        }
      )
  }

  handleSubmit(submit) {
    this.debug('Form is valid, handling submission:', submit)
    if (! this.props.onSubmit) {
      window.alert(
        "You haven't defined an onSubmit handler: " + JSON.stringify(submit.values)
      )
      return
    }
    this.setSubmittingState(
      { },
      async () => {
        this.debug('calling onSubmit() handler: ', submit)
        try {
          this.props.onSubmit(submit.values, this.getContext())
            .then( response => {
              console.log('.then response:', response)
              this.handleSuccess(response)
            })
            .catch(
              error => {
                console.log('.catch error: ', error)
                this.handleError(error)
              })
          console.log('after promise: ')

        }
        catch (error) {
          this.handleError({ error })
        }
      }
    )
  }
  handleSuccess(response) {
    this.debug('handleSuccess()', response)
    const onSuccess = this.props.onSuccess || doNothing
    this.setValidState(
      { },
      callFunctions(
        () => onSuccess(response),
        this.state.resetOnSuccess ? () => this.resetFields() : null
      )
    )
  }
  handleError(params) {
    // TODO: reset transient fields, reset form, etc
    // extract error/errors into state
    // const response = error.response || error
    this.debug('handleError()', params)
    const firstField = isArray(params?.errors) && this.fieldErrors(params.errors)

    // onFailure is provided as an alias for onError for backwards compatibility
    const onError = this.props.onError || this.props.onFailure || doNothing
    console.log('onError: ', onError)
    this.setInvalidState(
      params,
      callFunctions(
        () => onError(params),
        firstField
          ? () => firstField.setFocus()
          : null
      )
    )
  }
  fieldErrors(errors) {
    const fields = errors.reduce(
      (fields, error) => {
        const { name, message } = error
        const field = name && this.fields[name]
        if (field) {
          error.label ||= field.props.label
          field.setInvalidState({ message })
          fields.push(field)
        }
        return fields
      },
      [ ]
    )
    return this.state.focusInvalidField && fields.length && fields[0]
  }

  //--------------------------------------------------------------------------
  // render
  //--------------------------------------------------------------------------
  getContext() {
    // console.log('getContext form props: ', this.props)
    const context = {
      ...formDefaultProperties,
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    }
    return context
  }
}

const generated = Generator(FormContext)
export const { Context, Provider, Consumer, Use: useForm } = generated
export default generated