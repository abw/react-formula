import React from 'react'
import { DEFAULT, VALIDATED, VALIDATING } from '../Constants.jsx'
import prepareField from '../Field/Prepare.jsx'
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
    const useField = ({name=DEFAULT, ...spec}) => {
      const defaults = state.initialFields[name] || { }
      const field = prepareField({ name,...defaults, ...spec })
      return field
    }

    // focus field, blur field, validating_field, valid_field, invalid_field,
    // etc

    /*
    const set = (values) => {
      dispatch({ type: SET, values })
    }

    */
    const value = {
      ...state,
      validate,
      useField,
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