import React from 'react'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { classes } from '../Utils.js'

const Prefix = ({ field=useField() }) =>
  <div className={classes('prefix', field.prefixClass)}>
    {field.prefix}
  </div>

export default Themed(Prefix, 'Form.Input.Prefix')
