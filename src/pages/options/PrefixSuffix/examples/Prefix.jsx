import React from 'react'
import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixExample = () =>
  <Form>
    <Field
      name="prefix" type="text"
      label="Field with a prefix"
      prefix="😀"
    />
  </Form>

export default PrefixExample