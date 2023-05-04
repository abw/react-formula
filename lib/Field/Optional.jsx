import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'

const Optional = ({ field=useField() }) =>
  ! field.required && field.showOptional &&
    <span className="optional">
      {field.optionalLabel}
    </span>

export default Themed(Optional, 'Form.Field.Optional')
