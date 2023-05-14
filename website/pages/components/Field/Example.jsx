import { Form, Field } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FieldExample = () =>
  <Form>
    <Field
      name="example"
      label="An Example Field"
      type="text"   // default
      required
    />
  </Form>

export default FieldExample