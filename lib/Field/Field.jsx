import React from 'react'
import { useState } from 'react'
import useField from '../useField.jsx'
import DefaultLayout from './Layout.jsx'

export const Field = (props) => {
  const field  = useField(props)
  const {render, Layout} = field
  const [focus, setFocus] = useState(false)
  const onFocus = () => {
    setFocus(true)
    // field.setState({ focus: true });
    if (field.onFocus) {
      field.onFocus(field)
    }
  }
  const onBlur = () => {
    setFocus(false)
    // field.setState({ focus: false });
    if (field.onBlur) {
      field.onBlur(field)
    }
    // if field.validateOnBlur...
  }
  // onChange, onChangeEvent, onChangeValue
  // prepareValue, validateOnChange, minValidateLength
  const state = { ...field, focus, onFocus, onBlur }

  if (render) {
    return render(state)
  }
  if (Layout) {
    return <Layout field={state}/>
  }
  return <DefaultLayout field={state}/>
}

export default Field
