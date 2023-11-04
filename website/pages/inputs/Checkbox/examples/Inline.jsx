import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxWide = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      border inline
    />
    <Field
      name="stoat"
      type="checkbox"
      text="Stoats are sexy!"
      border inline
    />
  </Form>

export default CheckboxWide