import React from 'react'
import { Context } from './Context.jsx'

export const useField = () => {
  const field = React.useContext(Context)
  if (! field) {
    throw new Error('"useField()" must be used inside a <Field> component')
  }
  return field
}

export default useField