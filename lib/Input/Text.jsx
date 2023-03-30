import React from 'react'
import { inputAttrs } from '../Utils.js'
import Handlers from './Handlers.js'

export const TextInput = ({field}) => {
  const {
    type='text',
    className='input',
    handler=Handlers[type]||Handlers.default
  } = field
  const attrs = inputAttrs(field)

  return (
    <input
      className={className}
      type={type}
      aria-disabled={field.disabled}
      tabIndex={field.disabled ? -1 : field.tabIndex}
      onChange={handler(field)}
      {...attrs}
    />
  )
}

export default TextInput

