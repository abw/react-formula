import { Generator, Context as BaseContext } from '@abw/react-context'
//import { sleep } from '../Utils.js'
import { BLANK } from '../Constants.jsx'

class FieldContext extends BaseContext {
  static defaultProps = {
    initialValue: null,
    disabled: false,
    validateOnChange: false,
    validateOnBlur: true,
    validateOnInvalid: true,
    minValidateLength: 1,
    showRequired: false,
    showOptional: false,
    requiredMessage: 'A value is required',
  }
  static initialState = {
    focus:      false,
    validating: false,
    valid:      null,
    invalid:    null,
    error:      null,
    value:      BLANK,

    // id: this.props.id || nextFieldId(),
    // initialValue: this.props.initialValue,
    // value: isDefined(this.props.initialValue)
      // ? this.props.initialValue
      // : this.props.default,
  }
  static initialProps = {
    value: 'value',
    initialValue: 'value',
  }

  static debug       = true
  static debugPrefix = 'Field > '
  static debugColor  = 'teal'
  static actions     = [
    'set', 'onFocus', 'onBlur'
  ]
  constructor(props) {
    super(props)
    this.name = props.name
    this.debug(`field constructor for ${props.name}:`, props)
  }
  componentDidMount() {
    this.debug('componentDidMount')
    this.mounted = true
    this.props.form.attachField(this.props.name, this)
    // this.resetField()
  }
  componentWillUnmount() {
    this.debug('componentWillUnmount')
    this.mounted = false
    this.props.form.detachField(this.props.name)
  }
  set(value) {
    // this.debug("set: ", value)
    this.setState(
      {
        value
      },
      () => this.props.form.setValue(this.props.name, value)
    )
  }
  onFocus() {
    this.setState({
      focus: true
    })
  }
  onBlur() {
    this.setState({
      focus: false
    })
  }

  getContext() {
    /*
    return {
      props:   this.props,    // properties passed to the context
      actions: this.actions,  // callable action functions mapped to methods
      state:   this.state,
      name:    this.name
    }
    */
    const context = {
      ...this.props,    // properties passed to the context
      ...this.actions,  // callable action functions mapped to methods
      ...this.state,
      name: this.name
    }
    delete context.form
    delete context.children
    delete context.render
    // console.log('field context: ', context);

    return context
  }
}

const generated = Generator(FieldContext)
export const { Context, Provider, Consumer, Use: useField } = generated
export default generated