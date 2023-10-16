import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxBorder = () =>
  <Form>
    <Field
      type="checkbox"
      name="badger"
      label="Checkbox Border"
      text="I really, really like badgers!"
      border
    />
  </Form>

export default CheckboxBorder