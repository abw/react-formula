import React from 'react'
import { useField } from './Context.js'

export const FieldOptional = ({ field=useField() }) =>
  ! field.required && field.showOptional &&
    <span className="optional">
      {field.optionalText || 'optional'}
    </span>

export default FieldOptional
