import React from 'react'
import DefaultLabel from './Label.jsx'
import DefaultInput from './Input.jsx'
import DefaultMessage from './Message.jsx'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { fieldClass } from '../Utils.js'

const Layout = ({ field=useField(), children }) => {
  const {
    Label=DefaultLabel,
    Message=DefaultMessage,
    Input=DefaultInput,
  } = field
  const classes = fieldClass(field)

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
