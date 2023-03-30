import React from 'react'
import DefaultLabel from './Label.jsx'
import InputTypes from '../Input/index.js'

export const FieldLayout = ({field}) => {
  const {
    focus,
    type,
    className='field',
    focusClass='focus',
    Label=DefaultLabel,
    Input=InputTypes[type]||InputTypes.default
  } = field

  return (
    <div className={`${className} ${focus ? focusClass : ''}`}>
      <Label field={field}/>
      <Input field={field}/>
    </div>
  )
}

export default FieldLayout
