import React from 'react'
import { useState } from 'react'
import { USE_FIELD, SET_FIELD, VALIDATED, VALIDATING } from '../Constants.jsx'
import fieldContext from '../Field/Context.jsx'
import prepareField from '../Field/Prepare.jsx'
import { sleep } from '../Utils.js'

export const formProvider = ({ Context, state, dispatch }) => {
  const [fields, setFields] = useState({ })


  const attachField = (name, spec) => {
    const defaults = state.initialFields[name] || { }
    const field = prepareField({ name, ...defaults, ...spec })
    console.log(`attachField(${name}): `, field)
    setFields({ ...fields, [name]: field })
    return field
  }

  const detachField = name => {
    console.log(`attachField(${name}): `, fields[name])
    setFields(
      Object.entries(fields).reduce(
        (newFields, [key, value]) => {
          if (key !== name) {
            newFields[key] = value
          }
          return newFields
        },
        [ ]
      )
    )
  }

  const validate = () => {
    dispatch({ type: VALIDATING })
    // do stuff - this is just for testing
    sleep(2000).then(
      () => dispatch({ type: VALIDATED })
    )
  }

  const Provider = ({children}) => {

    /*
    const attachField(name, field) {
    }
    const detachField(name, field) {
    }
    */

    const useField = (name, spec) => {
      //if (state.fields[name]) {
      //  console.log('returning cached field: ', state.fields[name])
      //  return state.fields[name]
      //}
      const defaults = state.initialFields[name] || { }
      const field = prepareField({ name, ...defaults, ...spec });
      console.log('constructed field spec:', field)
      return field
      // return { name,...defaults, ...spec }
    }
    const registerField = (name, field) => {
      // if (state.fields[name] && state.fields[name]?.id === name.id) {
      if (state.fields[name]) {
        console.log('field already registered')
        return
      }
      console.log(`dispatching USE_FIELD for ${name}:`, field)
      sleep(500).then(() => dispatch({ type: USE_FIELD, name, field }))
    }
    const setField = (name, field) => {
      console.log(`dispatching SET_FIELD for ${name}:`, field)
      sleep(500).then(() => dispatch({ type: SET_FIELD, name, field }))
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
      attachField,
      detachField,
      // fieldSpec,
      useField,
      registerField,
      setField,
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