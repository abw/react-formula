import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs } from '../Utils.js'

export const CheckboxInput = ({field}) => {
  const {
    id,
    text,
    type='checkbox',
    className='input',
    inputsClass='checkbox inputs',
    optionClass='option',
    handler=Handlers[type]||Handlers.default
  } = field
  let classes = [
    inputsClass,
  ].filter(i => i).join(' ')
  const attrs = inputAttrs(field)

  return (
    <div className={classes}>
      <label htmlFor={id} className={optionClass}>
        <input
          className={className}
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
