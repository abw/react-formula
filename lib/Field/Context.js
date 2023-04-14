import { Generator, Context as BaseContext } from '@abw/react-context'
import { defaultConfig, defaultStatus, stateStatus } from './Config.js'
import { doNothing, isString } from '../Utils.js'
import { BLUR, CHANGED, FOCUS, INVALID, RESET, VALID, VALIDATING } from '../Constants.jsx'
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
  setReset(state, callback) {
    this.setStatus(RESET, state, callback)
  }
  setFocus(state, callback) {
    this.setStatus(FOCUS, state, callback)
  }
  setBlur(state, callback) {
    this.setStatus(BLUR, state, callback)
  }


  set(input) {
    const value = this.props.prepareValue
      ? this.props.prepareValue(input)
      : input
    // TODO: validate on change
    this.setChanged(
      { value },
      () => this.form.setValue(this.props.name, value)
    )
  }
  reset() {
    this.set(this.state.initialValue)
  }

  focus() {
    this.setFocus({ }, this.props.onFocus)
  }
  blur() {
    this.setBlur({ }, this.props.onBlur)
  }



  //--------------------------------------------------------------------------
  // Backwards compatibility
  //--------------------------------------------------------------------------
  onFocus() {
    this.focus()
  }
  onBlur() {
    this.blur()
  }

  getContext() {
    const context = {
      ...this.props,
      ...this.state,
      ...this.actions,
      name: this.name
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