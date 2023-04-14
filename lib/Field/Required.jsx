import React from 'react'
import { useField } from './Context.js'

export const FieldRequired = ({ field=useField() }) =>
  <span className="required">
    {field.requiredText || 'required'}
  </span>

export default FieldRequired
