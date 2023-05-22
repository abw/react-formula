import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, joinClasses, selectClass } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Checkbox = ({ field=useField() }) => {
  const {
    id,
    text,
    classes,
    type='checkbox',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs   = inputAttrs(field)
  const labelClass = joinClasses([
    selectClass(classes, 'option'),
    field.value ? selectClass(classes, 'checked') : null
  ])

  return (
    <label htmlFor={id} className={labelClass}>
      <input
        type={type}
        ref={field.inputRef}
        aria-disabled={field.disabled}
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onChange={handler(field)}
        {...attrs}
        checked={field.value}
      />
      <span>{text}</span>
    </label>
  )
}

export default Themed(Checkbox, 'Form.Input.Checkbox')
