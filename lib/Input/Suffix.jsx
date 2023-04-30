import React from 'react'
import { useField } from '../Field/Context.js'
import { Themed } from '../Theme.jsx'

const Suffix = ({ field=useField() }) => {
  const {suffix, suffixClass='suffix'} = field
  return suffix &&
    <div className={suffixClass}>
      {suffix}
    </div>
}

export default Themed(Suffix, 'Form.Input.Suffix')
