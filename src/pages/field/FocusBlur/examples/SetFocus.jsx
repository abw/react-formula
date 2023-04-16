import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1" label="Field One"
        />
        <Field
          onLoad={setField2}
          name="field2" label="Field Two"
        />
      </Form>
      <div>
        <button className="btn-blue" onClick={() => field1?.setFocus()}>
          Focus Field One
        </button>
        <button className="btn-blue" onClick={() => field2?.setFocus()}>
          Focus Field Two
        </button>
      </div>
    </>
  )
}

export default SetFocusExample