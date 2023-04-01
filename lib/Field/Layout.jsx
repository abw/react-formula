import React from 'react'
import DefaultLabel from './Label.jsx'
import DefaultMessage from './Message.jsx'
import InputTypes from '../Input/index.js'
import { propClasses } from '../Utils.js'

export const FieldLayout = ({field}) => {
  const {
    type,
    className='',
    fieldClass='field',
    validClass='valid',
    invalidClass='invalid',
    disabledClass='disabled',
    focusClass='focus',
    Label=DefaultLabel,
    Message=DefaultMessage,
    Input=InputTypes[type]||InputTypes.default
  } = field
  let classes = propClasses(
    field,
    { valid: validClass, invalid: invalidClass, disabled: disabledClass, focus: focusClass },
    fieldClass, className
  )

  return (
    <div className={classes}>
      <Label field={field}/>
      <Input field={field}/>
      <Message field={field}/>
    </div>
  )
}

export default FieldLayout
