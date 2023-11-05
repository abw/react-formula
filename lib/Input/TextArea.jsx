import React from 'react'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'
import { inputClasses } from '../Utils.js'

const TextArea = ({ field=useField() }) => {
  const { rows=5 } = field
  return (
    <textarea
      id={field.id}
      ref={field.inputRef}
      className={inputClasses(field)}
      name={field.name}
      value={field.value}
      disabled={field.disabled}
      aria-disabled={field.disabled}
      tabIndex={field.disabled ? -1 : field.tabIndex}
      placeholder={field.placeholder}
      autoComplete={field.autocomplete}
      onChange={e => field.onChange(e.target.value)}
      onFocus={field.onFocus}
      onBlur={field.onBlur}
      rows={rows}
    />
  )
}

export default Themed(TextArea, 'Form.Input.TextArea')
