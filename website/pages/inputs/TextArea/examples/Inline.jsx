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
      className="inline mar-r-option"
    />
    <Field
      name="one"
      type="textarea"
      label="Text Area Two"
      className="inline"
    />
  </Form>

export default Inline