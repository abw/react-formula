import React from 'react'
import Handlers from './Handlers.js'
import { inputAttrs, joinClasses, selectClass, valueOption } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Radio = ({ field=useField() }) => {
  const {
    classes,
    options=[],
    type='radio',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <>
      { options.map(
        option => {
          option = valueOption(option)
          const id = `${field.id}-${option.value}`
          const checked = field.value == option.value
          const labelClass = joinClasses([
            selectClass(classes, 'option'),
            option.className,
            checked ? selectClass(classes, 'checked') : null
          ])
          return (
            <label key={option.value} htmlFor={id}
              // className={labelClass}

            >
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
              <span>{option.text}</span>
            </label>
          )
        }
      )}
    </>
  )
}

export default Themed(Radio, 'Form.Input.Radio')
