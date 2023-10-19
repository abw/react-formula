import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequired = () =>
  <Form>
    <Field
      name="field1"
      label="Required Field"
      required showRequired wide
    />
    <Field
      name="field2"
      label="Optional Field"
      wide
    />
  </Form>

export default ShowRequired