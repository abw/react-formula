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
    <Field
      name="two" label="A wide checkbox example"
      type="checkbox" text="I really like badgers!"
      className="wide"
    />
    <Field
      name="three" label="A bare checkbox"
      type="checkbox" text="I really, really like badgers!"
      className="bare"
    />
    <Debug/>
  </Form>

export default CheckboxExample