import { useState, useId } from 'react'
import { DEFAULT } from '../Constants.jsx'
import fieldState from './field.js'

export const formState = (spec={}) => {
  const { fields={ }, values={ } } = spec
  const activeFields = { }
  const activeValues = { }
  const id = spec.id || useId()
  const [state, setState] = useState({
    id, fields, values, activeFields, activeValues,
    ...spec
  })
  const updateState = (newState) =>
    setState({ ...state, ...newState })

  const getField = ({name=DEFAULT, ...spec}) => {
    // what if spec changes?
    if (state.activeFields[name]) {
      return state.activeFields[name]
    }
    const field = fieldState(state, name, spec)
    updateState({ activeFields: { ...activeFields, [name]: field } })
  }

  // reset
  // resetField
  // set / setValues
  // setField / setValue

  return {
    state, updateState,
    getField
  }
}

export default formState

/*
  // merge value updates into the existing set
  const setValues = (set={}) => {
    newValues({ ...values, ...set })
    setChanged(true)
  }
  // set the current value for a field identified by name
  const setValue = (name=DEFAULT, value) => {
    setValues({ [name]: value })
  }
  // reset all values to initial state
  const resetValues = () => {
    newValues(initialValues)
  }
  // reset the current value for a field identified by name
  const resetValue = (name=DEFAULT) => {
    setValues({ [name]: initialValues[name] })
  }
  // get the current value for a field identified by name, or use any
  // defaultValue provided
  const getValue = (name=DEFAULT, defaultValue) => {
    return values[name] ?? defaultValue
  }

  // reset all fields and values
  const resetForm = ({ onReset }) => {
    resetFields()
    resetValues()
    setChanged(false)
    if (onReset) {
      onReset(values)
    }
    if (config.onReset) {
      config.onReset(values)
    }
  }

  return {
    ...config,
    fields, setFields, setField, resetFields, resetField, getField,
    values, setValues, setValue, resetValues, resetValue, getValue,
    resetForm,
    changed
  }
}

export default State
*/