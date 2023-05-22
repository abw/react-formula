import { Form, Field, Submit, BEMClasses } from '../../lib/index.js'
import '../../styles/formula-bem.scss'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit, BEMClasses } from '@abw/react-formula'

const BEMExample = () =>
  <Form classes={BEMClasses}>
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
      className="formula--fluid"
      required
    />
    <Submit/>
  </Form>

export default BEMExample