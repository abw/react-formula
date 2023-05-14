import { Form, Field, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const SimpleForm = ({color}) =>
  <div className={`branded-${color}`}>
    <Form>
      <Field
        name="field1"
        label={`The ${color} field`}
        placeholder={`The ${color} placeholder`}
      />
      <ResetSubmit/>
    </Form>
  </div>

const BrandedForms = () =>
  <div className="wide-border lg-grid-3">
    <SimpleForm color="red"/>
    <SimpleForm color="orange"/>
    <SimpleForm color="yellow"/>
    <SimpleForm color="green"/>
    <SimpleForm color="teal"/>
    <SimpleForm color="blue"/>
    <SimpleForm color="indigo"/>
    <SimpleForm color="violet"/>
    <SimpleForm color="maroon"/>
  </div>

export default BrandedForms