import { Form, Field, CancelSubmit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, CancelSubmit } from '@abw/react-formula'

const CancelSubmitSpace = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <CancelSubmit space/>
  </Form>

export default CancelSubmitSpace