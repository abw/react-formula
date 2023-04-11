import React from 'react'
import { Context } from './Context.js'

export const useForm = () => {
  const form = React.useContext(Context)
  if (! form) {
    throw new Error('"useForm()" must be used inside a <Form> component')
  }
  return form
}

export default useForm