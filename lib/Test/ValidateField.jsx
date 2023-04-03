import React from 'react'
import useField from './useField.jsx'

export const Validate = () => {
  const field = useField()
  return (
    <button onClick={field.validate}>Validate Field</button>
  )
}

export default Validate
