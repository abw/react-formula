import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { REQUIRED, OPTIONAL } from '../Constants.jsx'

const Label = ({ field=useField() }) => {
  const { label, id, required } = field
  const showRequired = field.showRequired  && required
  const showOptional = field.showOptional  && ! required
  const hasLabel     = label || showRequired || showOptional
  const className    = field.labelClass
  const style        = { }
  if (showRequired && field.requiredLabel !== REQUIRED) {
    style['--required-text'] = `"${field.requiredLabel}"`
  }
  if (showOptional && field.optionalLabel !== OPTIONAL) {
    style['--optional-text'] = `"${field.optionalLabel}"`
  }

  return hasLabel &&
    <label htmlFor={id} className={className} style={style}>
      {label||<span>&nbsp;</span>}
    </label>
}

export default Themed(Label, 'Form.Field.Label')
