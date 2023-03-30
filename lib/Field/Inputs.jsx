import React from 'react'
import DefaultInput from './Input.jsx'
import DefaultPrefix from './Prefix.jsx'
import DefaultSuffix from './Suffix.jsx'

export const FieldInputs = ({field}) => {
  const {
    inputsClass='inputs',
    controlClass='control',
    prefixedClass='prefixed',
    suffixedClass='suffixed',
    Prefix=DefaultPrefix,
    Input=DefaultInput,
    Suffix=DefaultSuffix
  } = field
  let classes = [
    inputsClass,
    field.prefix && prefixedClass,
    field.suffix && suffixedClass
  ].filter(i => i).join(' ')

  return (
    <div className={classes}>
      <Prefix field={field}/>
      <div className={controlClass}>
        <Input field={field}/>
      </div>
      <Suffix field={field}/>
    </div>
  )
}

export default FieldInputs
