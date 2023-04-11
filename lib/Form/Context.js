import { Generator, Context as BaseContext } from '@abw/react-context'
import { sleep } from '../Utils.js'

class FormContext extends BaseContext {
  static defaultProps = {
    validateOnChange:  false,
    validateOnBlur:    true,
    errorsInHeader:    true,
    errorsInFooter:    false,
    showRequired:      false,
    showOptional:      false,
    enctype:           'application/x-www-form-urlencoded',
    method:            'get',
    // fields:            { },
    // values:            { },
    // hidden:            { },
    // errors:            [ ],
  }
  static initialState = {
    submitting: false,
    validating: false,
    fields: { },
    values: { },
    hidden: { },
    errors: [ ],
  }
  static initialProps = {
    initialFields: 'fields',
    initialValues: 'values',
    values: 'values',
    errors: 'errors',
    hidden: 'hidden',
  }

  static debug       = false
  static debugPrefix = 'Form > '
  static debugColor  = 'rebeccapurple'
  static actions     = [
    'fieldSpec', 'attachField', 'detachField',
    'validate',
    // 'submitField',
    // 'submitForm',
    'setValue', 'setValues',
    'resetForm', 'setValues', 'setHidden'
  ]

  constructor(props) {
    super(props)
    this.fields = { }
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
  fieldSpec(name, props) {
    const { showRequired, showOptional } = this.props
    const defaults = this.props.fields?.[name] ?? { }
    const value    = this.props.values?.[name]
    return {
      name,
      showRequired,
      showOptional,
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
  resetForm() {
    if (! this.mounted) {
      return
    }
    const fields = Object.entries(this.state.fields).reduce(
      (fields, [name, field]) => {
        field.value = this.props.values[name]
        return fields
      },
      { }
    )
    Object.values(this.fields).forEach(
      field => field.resetField()
    )
    this.setState({
      fields,
      errors: [ ],
      error: null,
    })
    if (this.props.onReset) {
      this.props.onReset()
    }
  }
  setValue(name, value) {
    this.setState({
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
    this.setState({ validating: true })
    sleep(2000).then(
      () => this.setState({ validating: false })
    )
  }


  //--------------------------------------------------------------------------
  // render
  //--------------------------------------------------------------------------
  getContext() {
    // console.log('props: ', this.props);
    const context = {
      ...this.props,    // properties passed to the context
      ...this.state,    // internal state
      ...this.actions,  // callable action functions mapped to methods
    }
    delete context.children
    delete context.render
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