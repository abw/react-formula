import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'

const Message = ({ field=useField() }) => {
  const { help, message } = field
  const text = message || help
  return text
    ? <div className="help">{text}</div>
    : null
}

export default Themed(Message, 'Form.Field.Message')