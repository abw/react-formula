import React from 'react'

export const TextAreaInput = ({field}) => {
  const { className='input', rows=5 } = field
  return (
    <textarea
      className={className}
      id={field.id}
      name={field.name}
      value={field.value}
      disabled={field.disabled}
      aria-disabled={field.disabled}
      tabIndex={field.disabled ? -1 : field.tabIndex}
      placeholder={field.placeholder}
      autoComplete={field.autocomplete}
      onChange={e => field.set(e.target.value)}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
      rows={rows}
    />
  )
}

export default TextAreaInput
