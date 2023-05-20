import React from 'react'
import Handlers from './Handlers.js'
import DefaultPrefix from '../Input/Prefix.jsx'
import DefaultSuffix from '../Input/Suffix.jsx'
import { inputAttrs, propClasses } from '../Utils.js'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'
import { hasValue } from '@abw/badger-utils'

export const Text = ({ field=useField() }) => {
  const {
    type='text',
    prefix, suffix,
    // inputClass='input',
    inputsClass='inputs',
    prefixedClass='prefixed',
    suffixedClass='suffixed',
    Prefix=DefaultPrefix,
    Suffix=DefaultSuffix,
    handler=Handlers[type]||Handlers.default
  } = field
  let classes = propClasses(
    field,
    { prefix: prefixedClass, suffix: suffixedClass },
    inputsClass
  )
  const attrs = inputAttrs(field)

  return (
    <div className={classes}>
      { hasValue(prefix) && <Prefix field={field}/> }
      <input
        type={type}
        // className={inputClass}
        ref={field.inputRef}
        aria-disabled={field.disabled}
        // aria-invalid, aria-required
        tabIndex={field.disabled ? -1 : field.tabIndex}
        onFocus={field.onFocus}
        onBlur={field.onBlur}
        onChange={handler(field)}
        {...attrs}
      />
      { hasValue(suffix) && <Suffix field={field}/> }
    </div>
  )
}

export default Themed(Text, 'Form.Input.Text')

