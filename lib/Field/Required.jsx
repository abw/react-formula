import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Required = ({ field=useField() }) =>
  field.required && field.showRequired &&
    <span className={selectClass(field.classes, 'required')}>
      {field.requiredLabel}
    </span>

export default Themed(Required, 'Form.Field.Required')
