import React from 'react'
import { Form, Field } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxBare = () =>
  <Form>
    <Field
      name="badger" label="A bare checkbox"
      type="checkbox" text="I really, really like badgers!"
      className="bare"
    />
  </Form>

export default CheckboxBare