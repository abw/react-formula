import {
  VALID, INVALID, VALIDATING, VALIDATED, RESET, ATTACH_FIELD, DETACH_FIELD, SET_FIELD, SET_VALUES
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
    case SET_VALUES:
      return {
        ...state,
        changed: true,
        values: {
          ...state.values,
          ...action.values
        }
      }
    case RESET:
      return {
        ...state,
        changed: false,
        fields: { },
        values: { ...state.initialValues }
      }

    case ATTACH_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.name]: action.field
        }
      }

    case DETACH_FIELD:
      // eslint-disable-next-line no-case-declarations, no-unused-vars
      const { [action.name]: _, ...fields } = state.fields
      return {
        ...state,
        fields
      }

    case SET_FIELD:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.name]: {
            ...(state.fields[action.name] || { }),
            ...action.state
          }
        }
      }

    default:
      throw Error(`Invalid form reducer action: ${action.type}`)
  }
}

export default formReducer