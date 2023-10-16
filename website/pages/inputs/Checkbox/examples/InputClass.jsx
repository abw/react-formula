import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxInputClass = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      inputClass="larger"
    />
  </Form>

export default CheckboxInputClass