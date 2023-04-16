import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [form, setForm] = useState(false)

  return (
    <>
      <Form onLoad={setForm}>
        <Field name="field1" label="Field One"/>
        <Field name="field2" label="Field Two"/>
      </Form>
      <div>
        <button className="btn-blue" onClick={() => form?.setFocus('field1')}>
          Focus Field One
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field2')}>
          Focus Field Two
        </button>
      </div>
    </>
  )
}

export default SetFocusExample