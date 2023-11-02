import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Wide = () =>
  <Form>
    <Field
      name="regular"
      label="Regular Field"
    />
    <Field
      name="wide"
      label="Wide Field"
    />
    <Field
      name="wide-textarea"
      type="textarea"
      label="Wide Text Area Field"
    />
  </Form>

export default Wide