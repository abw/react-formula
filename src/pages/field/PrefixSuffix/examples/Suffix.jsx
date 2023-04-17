import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SuffixExample = () =>
  <Form>
    <Field
      name="suffix" type="text"
      label="Field with a suffix"
      suffix="🔒"
    />
  </Form>

export default SuffixExample