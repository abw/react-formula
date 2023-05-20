import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Optional = ({ field=useField() }) =>
  ! field.required && field.showOptional &&
    <span className={selectClass(field.classes, 'optional')}>
      {field.optionalLabel}
    </span>

export default Themed(Optional, 'Form.Field.Optional')
