import React from 'react'
import { useForm } from '../Form/Context.js'

export const Validate = () => {
  const form = useForm()
  return (
    <button type="button" onClick={form.validate}>Validate Form</button>
  )
}

export default Validate
