import React from 'react'
import { Form, Field } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const CheckboxWide = () =>
  <Form>
    <Field
      name="badger" label="A wide checkbox example"
      type="checkbox" text="I really like badgers!"
      className="wide"
    />
  </Form>

export default CheckboxWide