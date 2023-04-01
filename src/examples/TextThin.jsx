import React from 'react'
import { Form, Field } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const TextThin = () =>
  <Form>
    <Field
      name="one"
      label="A text field"
      className="thin"
      size="25"
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      size="6"
      className="thin"
    />
  </Form>

export default TextThin