import { Form, Field, Errors, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Submit } from '@abw/react-formula'

const ErrorsTitle = () =>
  <Form showRequired>
    <Field name="one" label="Field one" required/>
    <Field name="two" label="Field two" required/>
    <Errors
      title={
        n => n === 1
          ? 'There is an error'
          : `There are ${n} errors`
      }
    />
    <Submit/>
  </Form>

export default ErrorsTitle