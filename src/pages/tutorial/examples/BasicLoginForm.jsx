import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const BasicLoginForm = () =>
  <Form>
    <h2>Login</h2>
    <Field name="email" label="Email Address" required/>
    <Field name="password" type="password" label="Password" required/>
    <div className="flex space">
      <a href="https://tinyurl.com/576m4j6n">
        Forgot your password?
      </a>
      <Submit text="Login"/>
    </div>
  </Form>

export default BasicLoginForm