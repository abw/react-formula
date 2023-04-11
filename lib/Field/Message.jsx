import React from 'react'
import { useField } from './Context.js'

export const Help = () => {
  const field = useField()
  const { help, message } = field
  const text = message || help
  return text
    ? <div className="help">{text}</div>
    : null
}

export default Help
