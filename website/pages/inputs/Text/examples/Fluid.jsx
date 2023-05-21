import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Fluid = () =>
  <Form>
    <Field
      name="one"
      label="A fluid field"
      className="fluid"
      size="25"
    />
    <Field
      name="two"
      label="A text field with prefix and suffix"
      prefix="$" suffix=".00"
      size="6"
      className="fluid"
    />
  </Form>

export default Fluid