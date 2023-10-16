import React from 'react'
import Handlers from './Handlers.js'
import { useField } from '../Field/Context.js'
import { inputAttrs, classes, valueOption } from '../Utils.js'
import { Themed } from '../Theme.jsx'

const Radio = ({ field=useField() }) => {
  const {
    wide,
    border,
    options=[],
    inputClass,
    optionClass,
    optionsClass='options',
    type='radio',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <div className={classes(optionsClass)}>
      { options.map(
        option => {
          option = valueOption(option)
          const id = `${field.id}-${option.value}`
          const checked = field.value == option.value
          const labelClass = classes(
            'radio',
            optionClass,
            option.className,
            { wide, border }
          )
          return (
            <label
              key={option.value}
              className={labelClass}
              disabled={option.disabled}
              htmlFor={id}
            >
              <input
                type={type}
                className={inputClass}
                ref={field.inputRef}
                aria-disabled={field.disabled}
                tabIndex={field.disabled ? -1 : field.tabIndex}
                onChange={handler(field)}
                {...attrs}
                id={id}
                checked={checked}
                value={option.value}
              />
              {option.text}
            </label>
          )
        }
      )}
    </div>
  )
}

export default Themed(Radio, 'Form.Input.Radio')
