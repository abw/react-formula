import React from 'react'
import { Form, Field, Cancel } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Cancel } from '@abw/react-formula'

const CancelExample = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Cancel/>
  </Form>

export default CancelExample