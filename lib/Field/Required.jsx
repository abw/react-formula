import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'

const Required = ({ field=useField() }) =>
  field.required && field.showRequired &&
    <span className="required">
      {field.requiredText}
    </span>

export default Themed(Required, 'Form.Field.Required')
