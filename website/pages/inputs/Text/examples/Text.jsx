import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Text = () =>
  <Form>
    <Field
      name="one"
    />
    <Field
      name="two"
      label="A text input with a label"
    />
    <Field
      name="three"
      label="Another text input"
      type="text"
    />
    <Field
      name="four"
      label="Text with placeholder"
      placeholder="Hello World!"
    />
    <Field
      name="money"
      label="Prefix/Suffix"
      prefix="$"
      suffix=".00"
      prefixClass="lined shaded"
      suffixClass="lined shaded"
    />
  </Form>

export default Text