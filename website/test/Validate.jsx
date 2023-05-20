import React from 'react'
import { Form, Field, Submit } from '../../lib/index.js'

const TestForm = () =>
  <div>
    <h1>Test Form</h1>
    <Form>
      <Field name="foo" label="The foo field"/>
      <Field name="bar" label="The bar field"/>
      <Field name="baz" label="The baz field" required/>
      <Submit/>
    </Form>
  </div>

export default TestForm