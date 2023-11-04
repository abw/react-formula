import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Grid = () =>
  <Form>
    <div className="grid-2 gap-4">
      <Field
        name="one"
        label="Field One"
      />
      <Field
        name="two"
        label="Field Two"
      />
    </div>
  </Form>

export default Grid