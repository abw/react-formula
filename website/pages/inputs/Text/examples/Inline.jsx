import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Inline = () =>
  <Form>
    <Field
      name="one"
      label="A text field"
      size="25"
      inline
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      prefixClass="lined shaded"
      suffixClass="lined shaded"
      size="6"
      inline
    />
  </Form>

export default Inline