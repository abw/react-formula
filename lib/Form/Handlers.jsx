// import React from 'react'
import { useState } from 'react'
import { BLANK, RESET, SET_VALUES, VALIDATED, VALIDATING } from '../Constants.jsx'
import prepareField from '../Field/Prepare.jsx'
import { sleep } from '../Utils.js'

export const formHandlers = ({ state, dispatch }) => {
  const [fields, setFields] = useState({ })

  console.log('%c ** regenerating formHandlers', 'color:red')

  const attachField = (name, field) => {
    console.log(`attachField(${name})`)
    setFields({ ...fields, [name]: field })
  }

  const detachField = name => {
    console.log(`detachField(${name})`)
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

  const fieldSpec = (name, spec={}) => {
    //if (fields[name]) {
    //  console.log('returning cached field:', fields[name])
    //  return fields[name];
    //}
    const { showRequired, showOptional } = state
    const defaults = state.initialFields[name] || { }
    const value    = state.initialValues[name] || { }
    return {
      name,
      value,
      showRequired,
      showOptional,
      ...defaults,
      ...spec
    }
    /*
    const field    = prepareField({
      name,
      showRequired,
      showOptional,
      value: state.values[name] ?? BLANK,
      ...defaults,
      ...spec
    })
    */
    console.log(`fieldSpec(${name}): `, field)

    // setFields({ ...fields, [name]: field })
    fields[name] = field
    return field
  }

  const setValues = (values={}) => {
    dispatch({ type: SET_VALUES, values })
  }

  const setValue = (name, value) => {
    setValues({ [name]: value })
  }

  const reset = () => {
    dispatch({ type: RESET })
  }


  const validate = () => {
    // do stuff - this is just for testing
    dispatch({ type: VALIDATING })
    sleep(2000).then(
      () => dispatch({ type: VALIDATED })
    )
  }

  return {
    fieldSpec,
    setValues,
    setValue,
    reset,
    validate,
  }
}

export default formHandlers

/*
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

*/