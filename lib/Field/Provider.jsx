import React from 'react'
import { VALIDATED, VALIDATING } from '../Constants.jsx'
import useForm from '../Form/useForm.jsx'
import { sleep } from '../Utils.js'
import fieldReducer from './Reducer.jsx'

export const fieldProvider = ({ Context, state, dispatch }) => {
  const Provider = ({children}) => {
    const form = useForm();
    const validate = (e) => {
      console.log('validating field: ', state)
      const newState = fieldReducer(state, { type: VALIDATING })
      console.log('new state:', newState)
      console.log('validating:', newState.validating)
      form.setField(state.name, newState)
      e.preventDefault();
      return true
      // dispatch({ type: VALIDATING })
      // // do stuff - this is just for testing
      // sleep(2000).then(
      //   () => dispatch({ type: VALIDATED })
      // )
    }

    const value = {
      ...state,
      validate,
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

export default fieldProvider