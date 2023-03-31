import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const fields = {
  name: {
    label: 'Enter your name',
    placeholder: 'Your name'
  },
  message: {
    label: 'Enter a message',
    placeholder: 'Hello World'
  },
  badgers: {
    label: 'Do you like badgers?',
    type: 'checkbox',
    text: 'Yes, of course I do'
  },
  animal: {
    label: 'What is your favourite animal?',
    type: 'radio',
    options: ['Badger', 'Ferret', 'Stoat']
  },
  unused: {
    label: "This field isn't used in this example!",
    type: 'textarea',
  }
}

const SchemaExample = () =>
  <Form fields={fields}>
    <Field name="name"/>
    <Field name="message"/>
    <Field name="badgers"/>
    <Field name="animal" label="What is the coolest animal?"/>
    <Debug/>
  </Form>

export default SchemaExample