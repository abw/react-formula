import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, valueOption } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Select = ({ field=useField() }) => {
  const {
    options=[],
    placeholder,
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
        required={field.required || Boolean(placeholder)}  // allows styling via :invalid for placeholder
        // key={field.value}
      >
        { console.log(`render select with value: ${field.value} (${typeof field.value})`) }
        { Boolean(placeholder) &&
          <option value="" hidden disabled>{placeholder}</option>
        }
        { options.map(
          option => {
            option = valueOption(option)
            { console.log(`render option with value: ${option.value} (${typeof option.value}) = ${field.value === option.value ? 'SELECTED' : ''}`) }
            return (
              <option
                key={option.value}
                className={optionClass}
                value={option.value}
                disabled={option.disabled}
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

export default Themed(Select, 'Form.Input.Select')
