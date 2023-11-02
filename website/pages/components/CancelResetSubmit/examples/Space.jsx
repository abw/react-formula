import { Form, Field, CancelResetSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelResetSubmit } from '@abw/react-formula'

const CancelResetSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelResetSubmit space/>
  </Form>

export default CancelResetSubmitSpace