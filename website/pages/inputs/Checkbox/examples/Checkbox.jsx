import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one"
      type="checkbox"
      label="A checkbox example"
      text="I like badgers!"
    />
  </Form>

export default Checkbox