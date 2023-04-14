import React from 'react'
import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FocusExample = () =>
  <Form>
    <Field
      name="focus-field" label="Field with onFocus"
      onFocus={field => console.log(`focussed ${field.name}`)}
    />
  </Form>

export default FocusExample