import { Context as BaseContext } from '@abw/react-context'
import { CHANGED, INVALID, RESET, VALID, VALIDATING } from '../Constants.jsx'
import { isString, doNothing } from '@abw/badger-utils'
import { baseStatus } from './Status.js'

class Context extends BaseContext {
  static stateStatus = baseStatus

  setStatus(status, state={}, callback=doNothing) {
    if (! this.mounted) {
      return
    }
    const newStatus = isString(status)
      ? (this.constructor.stateStatus[status] || { [status]: true })
      : status
    /*
    console.log(`setting ${status} status to`, ns)
    console.log(`  old status is`, this.state.status)
    console.log(`  new status is`, newStatus)
    */

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