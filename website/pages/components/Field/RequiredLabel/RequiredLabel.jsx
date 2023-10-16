import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RequiredLabel = () =>
  <Form showRequired requiredLabel="Important!">
    <Field
      name="field1"
      label="Required Field"
      required wide
    />
    <Field
      name="field2"
      label="Another Required Field"
      requiredLabel="Very Important!"
      required wide
    />
  </Form>

export default RequiredLabel