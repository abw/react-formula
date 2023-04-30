import React from 'react'
import Optional from './Optional.jsx'
import Required from './Required.jsx'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'

const Label = ({ field=useField() }) => {
  const { labelClass = '', label, id, required } = field
  const showRequired = field.showRequired  && required
  const showOptional = field.showOptional  && ! required
  const hasLabel     = label || showRequired || showOptional

  return hasLabel &&
    <label htmlFor={id} className={labelClass}>
      {label||<span>&nbsp;</span>}
      {showRequired && <Required field={field} />}
      {showOptional && <Optional field={field} />}
    </label>
}

export default Themed(Label, 'Form.Field.Label')
