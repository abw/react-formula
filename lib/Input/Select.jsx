import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, valueOption } from '../Utils.js'
import { useField } from '../Field/Context.js'

export const SelectInput = ({ field=useField() }) => {
  const {
    options=[],
    type='select',
    className='input',
    inputsClass='select inputs',
    optionClass='option',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={inputsClass}>
      <select
        className={className}
        ref={field.inputRef}
        aria-disabled={field.disabled}
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onChange={handler(field)}
        {...attrs}
        value={field.value}
      >
        { options.map(
          option => {
            option = valueOption(option)
            // const checked = field.value == option.value
            return (
              <option
                key={option.value}
                className={optionClass}
                value={option.value}
              >
                {option.text}
              </option>
            )
          }
        )}
      </select>
    </div>
  )
}

export default SelectInput
