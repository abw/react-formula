import useForm from './useForm.jsx'
import { useState } from 'react'
import { BLANK } from './Constants.jsx'

export const useField = (spec) => {
  const form  = useForm()
  const field = form.getField(spec)
  const name  = field.name
  const [focus, setFocus] = useState(false)
  const [valid, setValid] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [validating, setValidating] = useState(false)
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
    ...field,
    form,
    value: form.getValue(name) ?? BLANK,
    focus, onFocus,
    blur, onBlur,
    valid, setValid,
    invalid, setInvalid,
    validating, setValidating,
    get:   ()    => form.getValue(name),
    reset: ()    => form.resetValue(name),
    set:   value => form.setValue(name, value),
    //setState: state => form.setField({ name, ...state }),
  }
}

export default useField