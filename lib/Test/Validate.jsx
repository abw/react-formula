import React from 'react'
import useForm from '../Form/useForm.jsx'

export const Validate = () => {
  const form = useForm()
  return (
    <button type="button" onClick={form.validate}>Validate Form</button>
  )
}

export default Validate
