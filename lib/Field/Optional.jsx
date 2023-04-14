import React from 'react'
import { useField } from './Context.js'

export const FieldOptional = ({ field=useField() }) =>
  <span className="optional">
    {field.optionalText || 'optional'}
  </span>

export default FieldOptional
