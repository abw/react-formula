import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const PrefixSuffixExample = () =>
  <Form>
    <Field
      name="money" type="number"
      label="Field with both prefix and suffix"
      prefix="$" suffix=".00"
    />
  </Form>

export default PrefixSuffixExample