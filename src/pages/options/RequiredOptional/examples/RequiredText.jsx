import React from 'react'
import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RequiredText = () =>
  <Form showRequired={true} requiredText="Important!">
    <Field
      name="field1" label="Required Field"
      required={true}
    />
    <Field
      name="field2" label="Another Required Field"
      required={true}
      requiredText="Very Important!"
    />
  </Form>

export default RequiredText