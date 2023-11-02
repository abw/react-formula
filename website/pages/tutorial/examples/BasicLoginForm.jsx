import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <Field
      name="email"
      label="Email Address"
      required
      // inputClass="flat"
    />
    <Field
      name="password"
      type="password"
      label="Password"
      required
    />
    <Submit text="Login"/>
  </Form>

export default BasicLoginForm