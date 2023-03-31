import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const CheckboxExample = () =>
  <Form>
    <Field
      name="one" label="A checkbox example"
      type="checkbox" text="I like badgers!"
    />
    <Debug/>
  </Form>

export default CheckboxExample