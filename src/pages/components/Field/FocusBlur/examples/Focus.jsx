import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const FocusExample = () =>
  <Form>
    <Field
      name="focus-field" label="Field with onFocus"
      onFocus={field => console.log(`focussed ${field.name}`)}
    />
  </Form>

export default FocusExample