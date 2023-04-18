import React from 'react'
import { Form, Field, ResetSubmit } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, ResetSubmit } from '@abw/react-formula'

const ResetSubmitExample = () =>
  <Form onSubmit={() => alert('You submitted the form')}>
    <Field name="field1" label="Field One"/>
    <ResetSubmit
      reset={{
        text: 'Reset the Form',
        className: 'btn-brown'
      }}
      submit={{
        text: 'Submit the Form',
        className: 'btn-blue'
      }}
    />
  </Form>

export default ResetSubmitExample