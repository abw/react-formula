import React from 'react'
import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
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