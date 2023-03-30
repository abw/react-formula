import React from 'react'
import DefaultInput from './Input.jsx'

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
    inputsClass='radio inputs',
    controlsClass='controls',
    optionClass='option',
    Input=DefaultInput,
  } = field

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
                <Input field={{ ...field, id, checked, value: option.value }}/>
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
