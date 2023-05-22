import { Form, Field, Submit, prefixClasses } from '../../lib/index.js'
import '../styles/my-form.scss'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, prefixClasses } from '@abw/react-formula'

const BEMExample = () =>
  <Form classes={prefixClasses('my-form')}>
    <Field
      name="name" label="Your name"
      required
    />
    <Field
      name="email" label="Your email address"
      required
    />
    <Field
      name="terms" type="checkbox"
      text="I accept the terms and conditions"
      className="my-form--fluid"
      required
    />
    <Submit/>
  </Form>

export default BEMExample