import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const OnChangeExample = () => {
  const [value, setValue] = useState('')
  return (
    <Form>
      <Field
        name="blur-field" label="Field with onChange"
        onChange={field => setValue(field.value)}
        validateOnChange={true}
        minValidateLength={3}
      />
      Current value: {value}
    </Form>
  )
}

export default OnChangeExample