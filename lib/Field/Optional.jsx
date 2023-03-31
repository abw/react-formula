import React from 'react'

export const FieldOptional = ({field}) =>
  <span className="optional">
    {field.optionalText || field.form.optionalText || 'optional'}
  </span>

export default FieldOptional
