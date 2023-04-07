import React from 'react'
import useField from '../Field/useField.jsx'

export const Validate = () => {
  const field = useField()
  return (
    <button onClick={field.validate}>Validate Field</button>
  )
}

export default Validate
