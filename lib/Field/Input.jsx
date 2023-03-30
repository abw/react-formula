import React from 'react'
import InputTypes from '../Input/index.js'

export const FieldInput = ({field}) => {
  const { input='text', Input=InputTypes[input] } = field
  if (Input) {
    return <Input field={field}/>
  }
  else {
    throw new Error(`Invalid input type "${input}" defined for "${field.name}" field`)
  }
}

export default FieldInput
