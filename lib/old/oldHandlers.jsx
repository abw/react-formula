// import React from 'react'
import { useState } from 'react'
import { ATTACH_FIELD, BLANK, DETACH_FIELD, RESET, SET_VALUES, VALIDATED, VALIDATING } from '../Constants.jsx'
// import prepareField from '../Field/Prepare.jsx'
import { sleep } from '../Utils.js'
import { useId } from 'react'
import prepareField from '../Field/Prepare.jsx'

export function formHandlers({ state, dispatch }) {
  console.log('%c ** regenerating formHandlers', 'color:red')
  // const [fields, setFields] = useState({ })
  let fields = { }

  // const activeFields = () => fields

  function fieldSpec(name, spec={}) {
    //if (state.fields[name]) {
    //  console.log(`returning cached field for ${name}:`, state.fields[name])
    //  return state.fields[name]
    //}
    const { showRequired, showOptional } = state
    // const defaults = state.fields[name] ?? state.initialFields[name] ?? { }
    const defaults = state.fields[name] ?? state.initialFields[name] ?? { }
    const value    = state.values[name] ?? state.initialValues[name]
    const id       = defaults.id || useId()
    const field    = prepareField({
      id,
      name,
      value,
      showRequired,
      showOptional,
      ...defaults,
      ...spec
    })
    console.log(`fieldSpec(${name}):`, field)
    //sleep(500).then(
    //  () => dispatch({ type: ATTACH_FIELD, name, field })
    //)
    return field
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
    // console.log(`fieldSpec(${name}): `, field)
    // setFields({ ...fields, [name]: field })
  }

  function attachField(name, field) {
    console.log(`attachField(${name})`)
    // DEBUGGING
    sleep(500).then(
      // () => dispatch({ type: ATTACH_FIELD, name, field })
      // () => setFields({ ...fields, [name]: field })
      () => fields = { ...fields, [name]: field }
    )
  }

  function detachField(name) {
    console.log(`detachField(${name})`)
    const { [name]: _, ...newFields } = fields
    // DEBUGGING
    sleep(500).then(
      // () => dispatch({ type: DETACH_FIELD, name })
      // () => setFields(newFields)
      () => fields = newFields
      /*
      () => setFields(
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
      */
    )
  }

  function setValues(values={}) {
    console.log('setValues')
    sleep(500).then(
      () => dispatch({ type: SET_VALUES, values })
    )
  }

  function setValue(name, value) {
    setValues({ [name]: value })
  }

  function reset() {
    dispatch({ type: RESET })
  }

  function validate() {
    console.log('validate()')
    // do stuff - this is just for testing
    dispatch({ type: VALIDATING })
    sleep(2000).then(
      () => dispatch({ type: VALIDATED })
    )
  }


  return {
    // activeFields,
    fieldSpec,
    attachField,
    detachField,
    setValues,
    setValue,
    validate,
    reset
  }


  /*
  const setValues = (values={}) => {
    dispatch({ type: SET_VALUES, values })
  }

  const setValue = (name, value) => {
    setValues({ [name]: value })
  }



  return {
    fieldSpec,
    setValues,
    setValue,
    reset,
    validate,
  }
  */
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