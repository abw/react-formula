import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, propClasses, valueOption } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Radio = ({ field=useField() }) => {
  const {
    options=[],
    type='radio',
    inputsClass='radio inputs',
    // inputClass='input',
    textClass='text',
    optionClass='option',
    checkedClass='checked',
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
          const classes = propClasses(
            { checked },
            { checked: checkedClass },
            optionClass, option.className
          )
          return (
            <label key={option.value} htmlFor={id} className={classes}>
              <input
                // className={inputClass}
                type={type}
                ref={field.inputRef}
                aria-disabled={field.disabled}
                tabIndex={field.disabled ? -1 : field.tabIndex}
                onChange={handler(field)}
                {...attrs}
                id={id}
                checked={checked}
                value={option.value}
              />
              <span className={textClass}>{option.text}</span>
            </label>
          )
        }
      )}
    </div>
  )
}

export default Themed(Radio, 'Form.Input.Radio')
