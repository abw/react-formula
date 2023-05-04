import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnBlurExample = () =>
  <Form>
    <Field
      name="one" label="Field One"
      onBlur={field => console.log(`blurred ${field.label}`)}
    />
    <Field
      name="two" label="Field Two"
      onBlur={field => console.log(`blurred ${field.label}`)}
    />
  </Form>

export default OnBlurExample