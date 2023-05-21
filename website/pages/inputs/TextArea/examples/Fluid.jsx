import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Fluid = () =>
  <Form>
    <Field
      name="one"
      type="textarea"
      label="Fluid Text Area"
      className="fluid"
    />
  </Form>

export default Fluid