import { Form, Field, Submit, Debug } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form showRequired onSubmit={ submit => console.log('Form submitted: ', submit) } debug>
    <Field name="one" label="Field one" required debug/>
    <Field name="two" label="Field two" debug/>
    <Submit/>
    <Debug/>
  </Form>

export default SubmitExample