import React from 'react'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Prefix = ({ field=useField() }) => {
  const {prefix, prefixClass='prefix'} = field
  return prefix &&
    <div className={prefixClass}>
      {prefix}
    </div>
}

export default Themed(Prefix, 'Form.Input.Prefix')
