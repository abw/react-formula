import React from 'react'
import DefaultInput from './Input.jsx'

export const CheckboxInputs = ({field}) => {
  const {
    id,
    text,
    inputsClass='checkbox inputs',
    controlsClass='controls',
    optionClass='option',
    Input=DefaultInput,
  } = field
  let classes = [
    inputsClass,
  ].filter(i => i).join(' ')

  return (
    <div className={classes}>
      <div className={controlsClass}>
        <label htmlFor={id} className={optionClass}>
          <Input field={{ ...field, checked: field.value }}/>
          <span className="label">{text}</span>
        </label>
      </div>
    </div>
  )
}

export default CheckboxInputs
