import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OptionalLabel = () =>
  <Form showOptional optionalLabel="Not required">
    <Field
      name="field1"
      label="Optional Field"
      wide
    />
    <Field
      name="field2"
      label="Another Optional Field"
      optionalLabel="Nice to have"
      wide
    />
  </Form>

export default OptionalLabel