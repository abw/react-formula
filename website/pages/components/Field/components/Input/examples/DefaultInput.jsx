import { Form, Field, Input } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Input } from '@abw/react-formula'

const FormInput = () =>
  <Form>
    <Field name="one">
      <div className="field flex baseline gap-2">
        <label>Label on the left</label>
        <Input/>
      </div>
    </Field>
  </Form>

export default FormInput