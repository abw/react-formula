import { Form, Field } from '@/lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetValidExample = () => {
  const [field1, setField1] = useState(false)
  const [field2, setField2] = useState(false)

  return (
    <>
      <Form>
        <Field
          onLoad={setField1}
          name="field1"
          label="Field One"
          wide
        />
        <Field
          onLoad={setField2}
          name="field2"
          label="Field Two"
          wide
        />
      </Form>
      <div className="flex gap-4">
        <button
          className="green"
          onClick={() => field1?.setValid()}
        >
          Valid Field One
        </button>
        <button
          className="green"
          onClick={() => field2?.setValid('Nice one!')}
        >
          Valid Field Two
        </button>
      </div>
    </>
  )
}

export default SetValidExample