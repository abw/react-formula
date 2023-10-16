import React from 'react'
import Handlers from './Handlers.js'
import { classes, inputAttrs } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Checkbox = ({ field=useField() }) => {
  const {
    id,
    text,
    wide,
    border,
    labelClass,
    inputClass,
    type='checkbox',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)
  const labelClassName = classes('checkbox', labelClass, { wide, border })

  return (
    <label htmlFor={id} className={labelClassName}>
      <input
        type={type}
        ref={field.inputRef}
        aria-disabled={field.disabled}
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onChange={handler(field)}
        className={inputClass}
        {...attrs}
        checked={field.value}
      />
      {text}
    </label>
  )
}

export default Themed(Checkbox, 'Form.Input.Checkbox')

