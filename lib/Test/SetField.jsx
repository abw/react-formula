import React from 'react'
import useField from './useField.jsx'

export const SetField = ({n=10}) => {
  const field = useField()
  return (
    <button onClick={() => field.set(n)}>Set Field to {n}</button>
  )
}

export default SetField
