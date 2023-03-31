import React from 'react'
import DefaultLabel from './Label.jsx'
import InputTypes from '../Input/index.js'
import { propClasses } from '../Utils.js'

export const FieldLayout = ({field}) => {
  const {
    type,
    className='field',
    validClass='valid',
    invalidClass='invalid',
    focusClass='focus',
    Label=DefaultLabel,
    Input=InputTypes[type]||InputTypes.default
  } = field
  let classes = propClasses(
    field,
    { valid: validClass, invalid: invalidClass, focus: focusClass },
    className
  )

  return (
    <div className={classes}>
      <Label field={field}/>
      <Input field={field}/>
    </div>
  )
}

export default FieldLayout
