import React from 'react'
import Handlers from './Handlers.js'
import DefaultPrefix from '../Input/Prefix.jsx'
import DefaultSuffix from '../Input/Suffix.jsx'
import { inputAttrs, propClasses } from '../Utils.js'
import { useField } from '../Field/Context.js'

export const TextInput = ({ field=useField() }) => {
  const {
    type='text',
    inputClass='input',
    inputsClass='inputs',
    prefixedClass='prefixed',
    suffixedClass='suffixed',
    Prefix=DefaultPrefix,
    Suffix=DefaultSuffix,
    handler=Handlers[type]||Handlers.default
  } = field
  //let classes = [
  //  inputsClass,
  //  field.prefix && prefixedClass,
  //  field.suffix && suffixedClass
  //].filter(i => i).join(' ')
  let classes = propClasses(
    field,
    { prefix: prefixedClass, suffix: suffixedClass },
    inputsClass
  )
  const attrs = inputAttrs(field)

  return (
    <div className={classes}>
      <Prefix field={field}/>
      <input
        type={type}
        className={inputClass}
        ref={field.inputRef}
        aria-disabled={field.disabled}
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onFocus={field.onFocus}
        onBlur={field.onBlur}
        onChange={handler(field)}
        {...attrs}
      />
      <Suffix field={field}/>
    </div>
  )
}

export default TextInput

