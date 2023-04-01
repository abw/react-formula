import React from 'react'
// import { USE_FIELD, SET, VALIDATED, VALIDATING } from '../Constants.jsx'
import { VALIDATED, VALIDATING } from '../Constants.jsx'
import { sleep } from '../Utils.js'

export const formProvider = ({ Context, state, dispatch }) => {
  const Provider = ({children}) => {
    const validate = () => {
      dispatch({ type: VALIDATING })
      // do stuff - this is just for testing
      sleep(2000).then(
        () => dispatch({ type: VALIDATED })
      )
    }

    /*
    const set = (values) => {
      dispatch({ type: SET, values })
    }

    const useField = (name, field) => {
      if (state.activeFields[name]) {
        console.log(`${name} field is already active in form`)
        return state.activeFields[name]
      }
      console.log('calling USE_FIELD for', name)
      dispatch({ type: USE_FIELD, name, field })
      console.log('called USE_FIELD for', name)
      console.log('field is', state.activeFields[name])
    }
    */
    const value = {
      ...state,
      validate,
      // useField,
      // set,
    }

    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    )
  }

  return Provider
}

export default formProvider