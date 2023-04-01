import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const fields = {
  message: {
    label: 'Message',
  }
}

const DebugForm = () =>
  <Form fields={fields}>
    <Field name="message"/>
    <Debug showForm={true}/>
  </Form>

export default DebugForm