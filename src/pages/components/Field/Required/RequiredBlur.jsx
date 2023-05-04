import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const RequiredBlur = () =>
  <Form validateOnBlur>
    <Field name="username" label="Username" required/>
    <Field name="password" label="Password" required/>
    <Submit/>
  </Form>

export default RequiredBlur