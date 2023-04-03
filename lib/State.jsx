// DEPRECATED (or will be soon)
import { useId } from 'react'
import { useState } from 'react'
import { DEFAULT } from './Constants.jsx'

export const State = (config={}) => {
  const initialFields = config.fields || { }
  const initialValues = config.values || { }
  const [fields,  newFields]  = useState(initialFields)
  const [values,  newValues]  = useState(initialValues)
  const [changed, setChanged] = useState(false)

  // merge field updates into the existing set
  const setFields = (set={}) => {
    newFields({ ...fields, ...set })
  }
  // update the specification for a field identified by name as a composite
  // of any existing configuration modified by additional spec properties
  const setField = ({name=DEFAULT, ...spec}) => {
    const defaults = fields[name] || { }
    const field = { ...defaults, ...spec }
    setFields({ [name]: field })
    return field
  }
  // reset all fields to initial state
  const resetFields = () => {
    newFields(initialFields)
  }
  // reset a single field to initial state
  const resetField = (name=DEFAULT) => {
    setField({ [name]: initialValues[name] })
  }
  // fetch a field by name from fields and return a composite its
  // configuration modified by any additional spec properties
  const getField = ({name=DEFAULT, ...spec}) => {
    const defaults = fields[name] || { }
    return { name, id: useId(), ...defaults, ...spec }
  }

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
