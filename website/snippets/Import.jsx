import React from 'react'
import { Form, Field, Submit } from '@abw/react-formula'

const MyFormExample = () =>
  <Form onSubmit={submit => console.log('Form submit:', submit)}>
    <Field name="name" label="What is your name?"/>
    <Submit/>
  </Form>

export default MyFormExample