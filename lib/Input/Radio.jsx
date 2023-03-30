import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs } from '../Utils.js'

// options can be defined as an array of simple booleans, strings, or numbers,
// e.g. options = [ true, 'yes', 23 ], otherwise they must be objects
// containing value and text, e.g. options = [ { value: 11, text: 'eleven}, ... ]
const valueTypes = {
  boolean: true,
  string:  true,
  number:  true,
}

export const RadioInputs = ({field}) => {
  const {
    options=[],
    type='radio',
    className='input',
    inputsClass='radio inputs',
    controlsClass='controls',
    optionClass='option',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={inputsClass}>
      { options.map(
        option => {
          option = valueTypes[typeof option]
            ? { value: option, text: option }
            : option
          const id = `${field.id}-${option.value}`
          const checked = field.value == option.value
          return (
            <div key={option.value} className={controlsClass}>
              <label htmlFor={id} className={optionClass}>
                <input
                  className={className}
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
            </div>
          )
        }
      )}
    </div>
  )
}

export default RadioInputs
