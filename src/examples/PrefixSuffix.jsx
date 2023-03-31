import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const PrefixSuffixExample = () =>
  <Form>
    <Field
      name="prefix" type="text"
      label="Field with a prefix"
      prefix="😀"
    />
    <Field
      name="suffix" type="text"
      label="Field with a suffix"
      suffix="🔒"
    />
    <Field
      name="money" type="number"
      label="Field with both prefix and suffix"
      prefix="$" suffix=".00"
    />
    <Debug/>
  </Form>

export default PrefixSuffixExample