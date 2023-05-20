import React from 'react'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Suffix = ({ field=useField() }) =>
  <div className={selectClass(field.classes, 'suffix')}>
    {field.suffix}
  </div>

export default Themed(Suffix, 'Form.Input.Suffix')
