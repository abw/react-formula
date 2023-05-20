import React from 'react'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const TextArea = ({ field=useField() }) => {
  const {
    // className='input',
    inputsClass='inputs',
    rows=5
  } = field
  return (
    <div className={inputsClass}>
      <textarea
        id={field.id}
        ref={field.inputRef}
        // className={className}
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
    </div>
  )
}

export default Themed(TextArea, 'Form.Input.TextArea')
