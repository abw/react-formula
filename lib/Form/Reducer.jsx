import {
  VALID, INVALID, VALIDATING, VALIDATED, SET, RESET, USE_FIELD
} from '../Constants.jsx'

export function formReducer(state, action) {
  switch (action.type) {
    case VALID:
      return { ...state, valid: true, invalid: false, validating: false }
    case INVALID:
      return { ...state, valid: false, invalid: true, validating: false }
    case VALIDATING:
      return { ...state, valid: null, invalid: null, validating: true }
    case VALIDATED:
      return { ...state, validating: false }
    case USE_FIELD:
      console.log('running USE_FIELD action')
      return {
        ...state,
        activeFields: {
          ...(state.activeFields || { }),
          [action.name] : action.field
        }
      }
    case SET:
      // TODO
      console.log('running SET action')
      return {
        ...state,
        activeValue: {
          ...(state.activeValue || { }),
          ...action.values
        }
      }
    case RESET:
      // TODO
      return state
    default:
      throw Error(`Invalid form reducer action: ${action.type}`)
  }
}

export default formReducer