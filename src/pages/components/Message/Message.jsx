import { Form, Field, Layout, Label, Text, Message, Submit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout, Label, Text, Message, Submit } from '@abw/react-formula'

const MessageExample = () =>
  <Form>
    <Field
      name="field1" label="Field One"
      help="Additional help message"
      validMessage="This is fine!"
      requiredMessage="You must enter a value"
      required
    >
      <Layout>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>
    <Submit/>
  </Form>

export default MessageExample