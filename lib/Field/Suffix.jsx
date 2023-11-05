import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { classes } from '../Utils.js'

const Suffix = ({ field=useField() }) =>
  <div className={classes('suffix', field.suffixClass)}>
    {field.suffix}
  </div>

export default Themed(Suffix, 'Form.Input.Suffix')
