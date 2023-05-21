import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Prefix = ({ field=useField() }) =>
  <div className={selectClass(field.classes, 'prefix')}>
    {field.prefix}
  </div>

export default Themed(Prefix, 'Form.Input.Prefix')
