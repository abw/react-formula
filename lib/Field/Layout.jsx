import React from 'react'
import DefaultLabel from './Label.jsx'
import DefaultInputs from './Inputs.jsx'
import CheckboxInputs from './Checkbox.jsx'
import RadioInputs from './Radio.jsx'

export const InputsTypes  = {
  checkbox: CheckboxInputs,
  radio:    RadioInputs
}

export const FieldLayout = ({field}) => {
  const {
    focus,
    type,
    className='field',
    focusClass='focus',
    Label=DefaultLabel,
    Inputs=InputsTypes[type]||DefaultInputs
  } = field

  return (
    <div className={`${className} ${focus ? focusClass : ''}`}>
      <Label field={field}/>
      <Inputs field={field}/>
    </div>
  )
}

export default FieldLayout
