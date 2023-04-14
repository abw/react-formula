import React from 'react'
import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnSubmit = () =>
  <Form onSubmit={() => alert('submitted')}>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default OnSubmit