import React from 'react'
import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Submit/>
  </Form>

export default SubmitExample