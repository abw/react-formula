import React from 'react'
import DefaultLabel from './Label.jsx'
import DefaultMessage from './Message.jsx'
import InputTypes from '../Input/index.js'
import { propClasses } from '../Utils.js'
import { useField } from './Context.js'
import { FOCUS, INVALID, VALID } from '../Constants.jsx'
import { Themed } from '../Theme.jsx'

const Layout = ({ field=useField(), children }) => {
  const {
    type,
    disabled,
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
      // [DISABLED]: disabledClass,
      [FOCUS]:    focusClass,
    },
    fieldClass, className,
    disabled ? disabledClass : null
  )

  return (
    <div className={classes}>
      { children ||
        <>
          <Label field={field}/>
          <Input field={field}/>
          <Message field={field}/>
        </>
      }
    </div>
  )
}

export default Themed(Layout, 'Form.Field.Layout')
