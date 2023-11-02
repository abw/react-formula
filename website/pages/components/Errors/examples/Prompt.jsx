import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsHeadline = () =>
  <Form showRequired>
    <Field name="one" label="Field one" required/>
    <Errors prompt="You shall not pass!"/>
    <Submit/>
  </Form>

export default ErrorsHeadline