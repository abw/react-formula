import {
  BLUR, FOCUS, VALID, INVALID, VALIDATING, VALIDATED, SET, RESET
} from '../Constants.jsx'

export function fieldReducer(state, action) {
  switch (action.type) {
    case FOCUS:
      return { ...state, focus: true }
    case BLUR:
      return { ...state, focus: false }
    case VALID:
      return { ...state, valid: true, invalid: false, validating: false }
    case INVALID:
      return { ...state, valid: false, invalid: true, validating: false }
    case VALIDATING:
      return { ...state, valid: null, invalid: null, validating: true }
    case VALIDATED:
      return { ...state, validating: false }
    case SET:
      console.log('fieldReducer SET:', action)
      return { ...state, value: action.value }
    case RESET:
      return { ...state, value: state.initialValue }
    default:
      throw Error(`Invalid field reducer action: ${action.type}`)
  }
}

export default fieldReducer