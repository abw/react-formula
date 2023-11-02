import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsTitle = () =>
  <Form showRequired>
    <Field name="one"   label="Field one" required/>
    <Errors title="Form Submission Failed"/>
    <Submit/>
  </Form>

export default ErrorsTitle