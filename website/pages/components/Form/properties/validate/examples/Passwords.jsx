import { Form, Field, Errors, Submit } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const checkPasswordsMatch = values => {
  if (values.password1 !== values.password2) {
    return Promise.reject({
      error: "The two passwords you entered don't match",
      errors: [
        {
          name: 'password1',
          message: 'This password...'
        },
        {
          name: 'password2',
          message: "...doesn't match this one"
        }
      ]
    })
  }
  else {
    values.checkedMessage = 'Passwords were checked!'
    return Promise.resolve(values)
  }
}

const PasswordsExample = () =>
  <Form validate={checkPasswordsMatch}>
    <Errors fieldErrors={false}/>
    <Field
      name="password1"
      type="password"
      label="New Password"
      required
    />
    <Field
      name="password2"
      type="password"
      label="Confirm Password"
      required
    />
    <Submit/>
  </Form>

export default PasswordsExample