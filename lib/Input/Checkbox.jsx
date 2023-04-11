import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs } from '../Utils.js'
import { useField } from '../Field/Context.js'

export const CheckboxInput = () => {
  const field = useField()
  const {
    id,
    text,
    type='checkbox',
    inputClass='input',
    inputsClass='checkbox inputs',
    optionClass='option',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={inputsClass}>
      <label htmlFor={id} className={optionClass}>
        <input
          className={inputClass}
          type={type}
          aria-disabled={field.disabled}
          tabIndex={field.disabled ? -1 : field.tabIndex}
          onChange={handler(field)}
          {...attrs}
          checked={field.value}
        />
        <span className="label">{text}</span>
      </label>
    </div>
  )
}

export default CheckboxInput
