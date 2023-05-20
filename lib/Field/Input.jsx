import React from 'react'
import InputTypes from '../Input/index.js'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'

const Input = ({ field=useField() }) => {
  const { type = 'text' } = field
  const Type = InputTypes[type] || InputTypes.default

  // className (moving out from inputs):
  // * selectClass('input', classes)
  // * selectClass(type, classes)
  // * selectClass('prefixed', classes) if prefix
  // * selectClass('suffixed', classes) if suffix
  //let classes = propClasses(
  //  field,
  //  { prefix: prefixedClass, suffix: suffixedClass },
  //  inputsClass
  //)

  return <Type field={field}/>
}

export default Themed(Input, 'Form.Field.Input')
