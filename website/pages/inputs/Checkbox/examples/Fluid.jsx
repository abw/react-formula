import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FluidCheckbox = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      className="fluid"
    />
    <Field
      name="stoat"
      type="checkbox"
      text="Stoats are sexy!"
      className="fluid"
    />
  </Form>

export default FluidCheckbox