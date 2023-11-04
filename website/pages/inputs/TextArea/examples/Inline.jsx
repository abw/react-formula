import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Inline = () =>
  <Form>
    <Field
      name="one"
      type="textarea"
      label="Text Area One"
      inline
    />
    <Field
      name="one"
      type="textarea"
      label="Text Area Two"
      inline
    />
  </Form>

export default Inline