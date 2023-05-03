import { Context as BaseContext } from '@abw/react-context'
import { CHANGED, INVALID, RESET, VALID, VALIDATING } from '../Constants.jsx'
import { isString, doNothing } from '@abw/badger-utils'
import { statusChange } from '../Status.js'

class Context extends BaseContext {
  static statusChange = statusChange

  newStatus(status) {
    return isString(status)
      ? (this.constructor.statusChange[status] || { [status]: true })
      : status
  }
  setStatus(status, state={}, callback=doNothing) {
    if (! this.mounted) {
      return
    }
    const newStatus = this.newStatus(status)
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