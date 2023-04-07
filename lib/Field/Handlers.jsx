import { RESET, SET, VALIDATED, VALIDATING } from '../Constants.jsx'
import { sleep } from '../Utils.js'

// export const fieldHandlers = ({ dispatch, form }) => {
export const fieldHandlers = ({ dispatch }) => {
  const set = (value) => {
    // TODO: set form value
    dispatch({ type: SET, value })
  }
  const reset = () => {
    // TODO: set form value
    dispatch({ type: RESET })
  }
  const validate = () => {
    dispatch({ type: VALIDATING })
    // do stuff - this is just for testing
    sleep(2000).then(
      () => dispatch({ type: VALIDATED })
    )
  }
  return {
    set,
    reset,
    validate,
  }
}

export default fieldHandlers

/*
    const validate = (e) => {
      const newState = fieldReducer(state, { type: VALIDATING })
      form.setField(state.name, newState)
      e.preventDefault();
      return true
      // dispatch({ type: VALIDATING })
      // // do stuff - this is just for testing
      // sleep(2000).then(
      //   () => dispatch({ type: VALIDATED })
      // )
    }
*/