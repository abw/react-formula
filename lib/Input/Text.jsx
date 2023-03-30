import React from 'react'
import Handlers from './Handlers.js'
import DefaultPrefix from '../Input/Prefix.jsx'
import DefaultSuffix from '../Input/Suffix.jsx'
import { inputAttrs } from '../Utils.js'

export const TextInput = ({field}) => {
  const {
    type='text',
    className='input',
    inputsClass='inputs',
    prefixedClass='prefixed',
    suffixedClass='suffixed',
    Prefix=DefaultPrefix,
    Suffix=DefaultSuffix,
    handler=Handlers[type]||Handlers.default
  } = field
  let classes = [
    inputsClass,
    field.prefix && prefixedClass,
    field.suffix && suffixedClass
  ].filter(i => i).join(' ')

  const attrs = inputAttrs(field)

  return (
    <div className={classes}>
      <Prefix field={field}/>
      <input
        className={className}
        type={type}
        aria-disabled={field.disabled}
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onChange={handler(field)}
        {...attrs}
      />
      <Suffix field={field}/>
    </div>
  )
}

export default TextInput

