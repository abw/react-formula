import React from 'react'
import useForm from '../Form/useForm.jsx'

export const Reset = () => {
  const form = useForm()
  return (
    <button type="button" onClick={form.reset}>Reset Form</button>
  )
}

export default Reset
