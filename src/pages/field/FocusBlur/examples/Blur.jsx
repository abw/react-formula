import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const BlurExample = () =>
  <Form>
    <Field
      name="blur-field" label="Field with onBlur"
      onBlur={field => console.log(`blurred ${field.name}`)}
    />
  </Form>

export default BlurExample