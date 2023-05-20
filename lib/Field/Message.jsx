import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Message = ({ field=useField() }) => {
  const { help, message, classes } = field
  const text = message ?? help
  const className = selectClass(classes, 'help')
  return text
    ? <div className={className}>{text}</div>
    : null
}

export default Themed(Message, 'Form.Field.Message')