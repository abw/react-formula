import React from 'react'
import DefaultLabel from './Label.jsx'
import DefaultMessage from './Message.jsx'
import InputTypes from '../Input/index.js'
import { propClasses } from '../Utils.js'
import { useField } from './Context.js'
import { DISABLED, FOCUS, INVALID, VALID } from '../Constants.jsx'

export const FieldLayout = ({ field=useField(), children }) => {
  const {
    type,
    className,
    fieldClass,
    validClass,
    invalidClass,
    disabledClass='disabled',
    focusClass='focus',
    Label=DefaultLabel,
    Message=DefaultMessage,
    Input=InputTypes[type]||InputTypes.default
  } = field

  const classes = propClasses(
    field.status,
    {
      [VALID]:    validClass,
      [INVALID]:  invalidClass,
      [DISABLED]: disabledClass,
      [FOCUS]:    focusClass,
    },
    fieldClass, className
  )

  return (
    <div className={classes}>
      <Label field={field}/>
      <Input field={field}/>
      <Message field={field}/>
      {children}
    </div>
  )
}

export default FieldLayout
