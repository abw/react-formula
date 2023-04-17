import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
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