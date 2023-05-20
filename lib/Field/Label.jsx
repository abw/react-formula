import React from 'react'
import Optional from './Optional.jsx'
import Required from './Required.jsx'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Label = ({ field=useField() }) => {
  const { classes, label, id, required } = field
  const showRequired = field.showRequired  && required
  const showOptional = field.showOptional  && ! required
  const hasLabel     = label || showRequired || showOptional
  const className    = selectClass(classes, 'label')

  return hasLabel &&
    <label htmlFor={id} className={className}>
      {label||<span>&nbsp;</span>}
      {showRequired && <Required field={field} />}
      {showOptional && <Optional field={field} />}
    </label>
}

export default Themed(Label, 'Form.Field.Label')
