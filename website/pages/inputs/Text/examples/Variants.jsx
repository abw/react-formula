import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Variants = () =>
  <Form>
    <Field name="one"   type="number"   label="A number field"/>
    <Field name="two"   type="date"     label="A date field"/>
    <Field name="three" type="password" label="A password field"/>
    <Field name="four"  type="color"    label="A color field"/>
  </Form>

export default Variants