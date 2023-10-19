import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PlaceholderExample = () =>
  <Form>
    <Field
      name="name" label="Your Name"
      placeholder="Enter your name"
    />
  </Form>

export default PlaceholderExample