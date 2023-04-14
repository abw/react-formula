import React from 'react'
import { Form, Fields, Field } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Fields, Debug } from '@abw/react-formula'

const fields = {
  field1: {
    label: 'Required Field',
    required: true
  },
  field2: {
    label: 'Optional Field',
  },
}

const RequiredOptionalExample = () =>
  <>
    <h3>showRequired</h3>
    <Form fields={fields} showRequired={true}>
      <Fields names="field1 field2"/>
    </Form>
  {/*
    <h3>showOptional</h3>
    <Form fields={fields} showOptional={true}>
      <Fields names="field1 field2"/>
    </Form>

    <h3>showRequired and showOptional</h3>
    <Form fields={fields} showRequired={true} showOptional={true}>
      <Fields names="field1 field2"/>
    </Form>

    <h3>requiredText and optionalText</h3>
    <Form
      fields={fields}
      showRequired={true} showOptional={true}
      requiredText="* REQUIRED" optionalText="? OPTIONAL"
    >
      <Fields names="field1 field2"/>
    </Form>
  */}
  </>

export default RequiredOptionalExample