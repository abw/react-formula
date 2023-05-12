import { Context as BaseContext } from '@abw/react-context'
import { CHANGED, INVALID, RESET, VALID, VALIDATING } from './Constants.jsx'
import { doNothing, isFunction } from '@abw/badger-utils'

// Base class for form and field contexts that has function to set status

class Context extends BaseContext {
  constructor(props) {
    super(props)
    this.newStatus = this.constructor.newStatus(props)
    this.state = {
      status: this.newStatus(RESET)
    }
  }
  setStatus(status, addState={}, callback=doNothing) {
    if (! this.mounted) {
      return
    }
    this.setState(
      oldState => ({
        ...(isFunction(addState) ? addState(oldState) : addState),
        status: this.newStatus(status, oldState.status)
      }),
      callback
    )
  }
  setResetState(state, callback) {
    this.setStatus(RESET, state, callback)
  }
  setChangedState(state, callback) {
    this.setStatus(CHANGED, state, callback)
  }
  setValidatingState(state, callback) {
    this.setStatus(VALIDATING, state, callback)
  }
  setInvalidState(state, callback) {
    this.setStatus(INVALID, state, callback)
  }
  setValidState(state, callback) {
    this.setStatus(VALID, state, callback)
  }
}

export default Context