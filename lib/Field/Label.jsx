import React from 'react'
import Optional from './Optional.jsx'
import Required from './Required.jsx'

export const Label = ({field}) => {
  const { labelClass='', label, id, required, form } = field
  const showRequired = form.showRequired && required
  const showOptional = form.showOptional && ! required
  const hasLabel     = label || showRequired || showOptional

  return hasLabel &&
    <label htmlFor={id} className={labelClass}>
      {label||<span>&nbsp;</span>}
      {showRequired && <Required field={field} />}
      {showOptional && <Optional field={field} />}
    </label>
}

export default Label
