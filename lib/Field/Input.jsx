import React from 'react'

export const FieldInput = ({field}) => {
  return (
    <input
      type="text"
      value={field.value ?? ''}
      onChange={e => field.set(e.target.value)}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
    />
  )
}

export default FieldInput
