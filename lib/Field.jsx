import React from 'react'
import useField from './useField.jsx'

export const Field = (props) => {
  const field = useField(props)
  return (
    <div className="field">
      <label>{field.label}</label>
      <input
        type="text"
        value={field.value ?? ''}
        onChange={e => field.set(e.target.value)}
      />
      <button onClick={field.reset}>Reset</button>
    </div>
  )
}

export default Field
