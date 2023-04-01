import React from 'react'
import { Form, Field } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Checkbox = () =>
  <Form>
    <Field
      name="one" label="A checkbox example"
      type="checkbox" text="I like badgers!"
    />
  </Form>

export default Checkbox