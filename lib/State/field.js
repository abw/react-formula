import { useState, useId } from 'react'
import { passValue } from '../Utils.js'

/*
export const fieldState = (form, name, spec={}) => {
  const { fields={ }, values={ } } = form
  const defaults = fields[name]  || { }
  const field    = { ...defaults, ...spec }
  const value    = field.value ?? values[name]
  const prepare  = field.prepare || field.prepareValue || passValue
  const id       = field.id      || useId()
  const [state, dispatch] = useReducer(
    reducer,
    {
      name, id, value, prepare,
      initialValue: value,
      ...field
    }
  )
  const onFocus = () => {
    if (state.onFocus) {
      field.onFocus(state)
    }
    dispatch({ type: 'focus' })
  }
  const onBlur = () => {
    if (state.onBlur) {
      state.onBlur(state)
    }
    dispatch({ type: 'blur' })
  }
  const onChange = (value) => {
    //if (state.onChange) {
    //  state.onChange(state)
    //}
    // prepare(value)
    dispatch({ type: 'set', value: value })
  }

  const setValid = (valid=true) =>
    updateState({ valid, invalid: ! valid, validating: false })

  const setInvalid = (invalid=true) =>
    setValid(! invalid)

  const setValidating = (validating=true) =>
    validating
      ? setState({ validating, valid: null, invalid: null })
      : setState({ validating })

  const set = value =>
    updateState({
      value:      prepare(value),
      valid:      null,
      invalid:    null,
      validating: null
    })

  const reset = () =>
    set(value)

  return {
    state, updateState,
    setFocus, setValid, setInvalid, setValidating, onFocus, onBlur,
    set, reset
  }
}
*/

export const fieldState = (form, name, spec={}) => {
  const { fields={ }, values={ } } = form
  const defaults = fields[name]  || { }
  const field    = { ...defaults, ...spec }
  const value    = field.value ?? values[name]
  const prepare  = field.prepare || field.prepareValue || passValue
  const id       = field.id      || useId()
  const [state, setState] = useState({
    name, id, value, prepare,
    initialValue: value,
    ...field
  })
  const updateState = (newState) =>
    setState({ ...state, ...newState })

  const setFocus = (focus=true) =>
    updateState({ focus })

  const setValid = (valid=true) =>
    updateState({ valid, invalid: ! valid, validating: false })

  const setInvalid = (invalid=true) =>
    setValid(! invalid)

  const setValidating = (validating=true) =>
    validating
      ? setState({ validating, valid: null, invalid: null })
      : setState({ validating })

  const set = value =>
    updateState({
      value:      prepare(value),
      valid:      null,
      invalid:    null,
      validating: null
    })

  const reset = () =>
    set(value)

  const onFocus = () => {
    setFocus(true)
    if (field.onFocus) {
      field.onFocus(field)
    }
  }
  const onBlur = () => {
    setFocus(false)
    if (field.onBlur) {
      field.onBlur(field)
    }
    // if field.validateOnBlur...
  }

  return {
    state, updateState,
    setFocus, setValid, setInvalid, setValidating, onFocus, onBlur,
    set, reset
  }
}

export default fieldState