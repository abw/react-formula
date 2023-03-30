import React from 'react'
import DefaultLabel from './Label.jsx'
import DefaultInputs from './Inputs.jsx'

export const FieldLayout = ({field}) => {
  const {
    focus,
    className='field',
    focusClass='focus',
    Label=DefaultLabel,
    Inputs=DefaultInputs
  } = field

  return (
    <div className={`${className} ${focus ? focusClass : ''}`}>
      <Label field={field}/>
      <Inputs field={field}/>
    </div>
  )
}

export default FieldLayout
