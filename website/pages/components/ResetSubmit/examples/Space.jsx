import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <ResetSubmit space/>
  </Form>

export default ResetSubmitSpace