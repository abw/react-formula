import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const InlineCheckbox = () =>
  <Form>
    <Field
      name="badger"
      type="checkbox"
      text="Badgers are brilliant!"
      className="inline mar-r-option"
    />
    <Field
      name="ferret"
      type="checkbox"
      text="Ferrets are funky!"
      className="inline"
    />
  </Form>

export default InlineCheckbox