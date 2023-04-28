import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React, { useState } from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitResponse = () => {
  const [values, setValues] = useState()

  // dummy submission in the style of fetch or axios
  const onSubmit = submit => {
    return Promise.resolve({
      status: 200,
      data:   submit.values
    })
  }

  // handle successful response
  const onSuccess = response => setValues(response.data)

  return (
    <>
      <Form onSubmit={onSubmit} onSuccess={onSuccess} debug>
        <Field name="email" label="Email Address" required/>
        <Field name="password" type="password" label="Password" required/>
        <Submit text="Login"/>
      </Form>
      { values
        ? <div className="debug">
            <h4>Submitted Values</h4>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </div>
        : null
      }
    </>
  )
}

export default SubmitResponse