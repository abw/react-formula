import { Form, Field } from '../../../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SetFocusExample = () => {
  const [form, setForm] = useState(false)

  return (
    <>
      <Form onLoad={setForm}>
        <Field
          name="field1" label="Field One"
        />
        <Field
          name="field2" label="Field Two"
          type="textarea"
        />
        <Field
          name="field3" label="Field Three"
          type="checkbox" text="I agree to the Terms and Conditions"
        />
        <Field
          name="field4" label="Field Four"
          type="select" options={['Nigel', 'David', 'Derek']}
        />
        <Field
          name="field5" label="Field Five"
          type="radio" default='Keyboards'
          options={['Vocals', 'Guitar', 'Bass', 'Keyboards', 'Drums']}
        />
      </Form>
      <div>
        <button className="btn-blue" onClick={() => form?.setFocus('field1')}>
          Focus One
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field2')}>
          Focus Two
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field3')}>
          Focus Three
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field4')}>
          Focus Four
        </button>
        <button className="btn-blue" onClick={() => form?.setFocus('field5')}>
          Focus Five
        </button>
      </div>
    </>
  )
}

export default SetFocusExample