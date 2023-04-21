import { Form, Fields } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields } from '@abw/react-formula'

const fields = {
  username: {
    label: 'Username',
    required: true,
  },
  password: {
    label: 'Password',
    type:  'password',
    required: true,
  }
}

const ValidateExample = () =>
  <Form fields={fields} validateOnBlur>
    <Fields names="username password"/>
  </Form>

export default ValidateExample