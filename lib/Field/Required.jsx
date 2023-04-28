import React from 'react'
import { useField } from './Context.js'

export const FieldRequired = ({ field=useField() }) =>
  field.required && field.showRequired &&
    <span className="required">
      {field.requiredText}
    </span>

export default FieldRequired
