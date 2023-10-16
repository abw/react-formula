import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const ShowRequiredForm = () =>
  <Form showRequired>
    <Field
      name="field1"
      label="Required Field"
      required wide
    />
    <Field
      name="field2"
      label="Optional Field"
      wide
    />
  </Form>

export default ShowRequiredForm