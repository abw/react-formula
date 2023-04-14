import React from 'react'
import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SubmitProps = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Submit text="Save Changes" className="btn-green"/>
  </Form>

export default SubmitProps