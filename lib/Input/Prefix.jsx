import React from 'react'
import { useField } from '../Field/Context.js'

export const InputPrefix = ({ field=useField() }) => {
  const {prefix, prefixClass='prefix'} = field
  return prefix &&
    <div className={prefixClass}>
      {prefix}
    </div>
}

export default InputPrefix
