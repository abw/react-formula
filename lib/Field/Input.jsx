import React from 'react'
import InputTypes from '../Input/index.js'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { hasValue } from '@abw/badger-utils'
import { RADIO, TEXT } from '../Constants.jsx'
import Inputs from './Inputs.jsx'

const Input = ({ field=useField() }) => {
  const {
    prefix,
    suffix,
    type=TEXT,
  } = field
  const Type = InputTypes[type] || InputTypes.default

  if (type == RADIO) {
    return <Type field={field}/>
  }
  if (hasValue(prefix) || hasValue(suffix)) {
    return <Inputs/>
  }
  return (
    <Type field={field}/>
  )
}

export default Themed(Input, 'Form.Field.Input')
