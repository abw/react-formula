import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, propClasses } from '../Utils.js'
import { useField } from '../Field/Context.js'

export const CheckboxInput = ({ field=useField() }) => {
  const {
    id,
    text,
    type='checkbox',
    inputClass='input',
    inputsClass='checkbox inputs',
    optionClass='option',
    checkedClass='checked',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs   = inputAttrs(field)
  const checked = field.value
  const classes = propClasses(
    { checked },
    { checked: checkedClass },
    optionClass
  )

  return (
    <div className={inputsClass}>
      <label htmlFor={id} className={classes}>
        <span className="checkbox">
          <input
            className={inputClass}
            type={type}
            ref={field.inputRef}
            aria-disabled={field.disabled}
            tabIndex={field.disabled ? -1 : field.tabIndex}
            onChange={handler(field)}
            {...attrs}
            checked={field.value}
          />
        </span>
        <span className="label">{text}</span>
      </label>
    </div>
  )
}

export default CheckboxInput
