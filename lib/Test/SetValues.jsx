import React from 'react'
import useForm from '../Form/useForm.jsx'

export const SetValues = () => {
  const form = useForm()
  return (
    <button type="button" onClick={() => form.setValues({ foo: 99, bar: 100 })}>Set Values</button>
  )
}

export default SetValues
