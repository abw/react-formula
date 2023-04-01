import React from 'react'

export const Help = ({field}) => {
  const { help, message } = field
  const text = message || help
  return text
    ? <div className="help">{text}</div>
    : null
}

export default Help
