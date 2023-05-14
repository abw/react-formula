import { Form, Field, Layout } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/react-formula'

const LayoutExample = () =>
  <Form>
    <Field name="field1" label="Field One" help="A help message">
      { field => `Something before ${field.label}`}
      <Layout/>
      { field => `Something after ${field.label}`}
    </Field>
  </Form>

export default LayoutExample