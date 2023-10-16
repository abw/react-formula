import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      label="Default Checkbox"
      text="I like badgers!"
    />
    <Field
      name="two"
      type="checkbox"
      text="I accept the terms and conditions"
    />
  </Form>

export default Checkbox