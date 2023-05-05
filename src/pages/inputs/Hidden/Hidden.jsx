import { Form, Field, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const HiddenExample = () =>
  <Form debug>
    <Field name="user_id" type="hidden" value="123"/>
    <Field name="name"    label="Your Name"/>
    <Submit/>
  </Form>

export default HiddenExample