import {
  Form, Field, FieldLayout, Label, Text, Message, Submit
} from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import {
// PRETEND:   Form, Field, FieldLayout, Label, Text, Message, Submit
// PRETEND: } from '@abw/react-formula'

const fields = {
  email: {
    label:    'Email Address',
    required: true,
  },
}

const HeadlessBuiltins = () =>
  <Form fields={fields}>
    <Field name="email">
      { field =>
        <FieldLayout>
          <h3>Custom Layout for {field.name}</h3>
          <Label/>
          <Text/>
          <Message/>
        </FieldLayout>
      }
    </Field>
    <Submit text="Login"/>
  </Form>

export default HeadlessBuiltins