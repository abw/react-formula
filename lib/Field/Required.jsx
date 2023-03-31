import React from 'react'

export const FieldRequired = ({field}) =>
  <span className="required">
    {field.requiredText || field.form.requiredText || 'required'}
  </span>

export default FieldRequired
