import React from 'react'
import { useField } from '../Field/Context.js'

export const SetField = ({n=10}) => {
  const field = useField()

  return (
    <button onClick={e => { e.preventDefault(); field.set(n) }}>Set Field to {n}</button>
  )
}

export default SetField
