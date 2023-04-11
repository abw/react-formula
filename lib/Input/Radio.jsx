import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, valueOption } from '../Utils.js'
import { useField } from '../Field/Context.js'

export const RadioInput = () => {
  const field = useField()
  const {
    options=[],
    type='radio',
    inputClass='input',
    inputsClass='radio inputs',
    optionClass='option',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={inputsClass}>
      { options.map(
        option => {
          option = valueOption(option)
          const id = `${field.id}-${option.value}`
          const checked = field.value == option.value
          return (
            <label key={option.value} htmlFor={id} className={`${optionClass} ${option.className||''}`}>
              <input
                className={inputClass}
                type={type}
                aria-disabled={field.disabled}
                tabIndex={field.disabled ? -1 : field.tabIndex}
                onChange={handler(field)}
                {...attrs}
                id={id}
                checked={checked}
                value={option.value}
              />
              <span className="label">{option.text}</span>
            </label>
          )
        }
      )}
    </div>
  )
}

export default RadioInput
