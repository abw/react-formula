import React from 'react'
import { useField } from '../Field/Context.js'

export const InputSuffix = ({ field=useField() }) => {
  const {suffix, suffixClass='suffix'} = field
  return suffix &&
    <div className={suffixClass}>
      {suffix}
    </div>
}

export default InputSuffix
