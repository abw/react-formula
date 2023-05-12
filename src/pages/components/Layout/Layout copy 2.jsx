import { Form, Field, Layout, Label, Text, Message } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout, Label, Text, Message } from '@abw/react-formula'

const LayoutExample = () =>
  <Form showRequired validateOnBlur>
    <Field name="field1" label="Field One" required/>

    <Field name="field2" label="Field Two" required>
      <Layout/>
    </Field>

    <Field name="field3" label="Field Three" required>
      <Layout>
        <Label/>
        <Text/>
        <Message/>
      </Layout>
    </Field>

    <Field name="field4" label="Field Four">
      <Layout>
        <div className="lg-label-on-left">
          <Label/>
          <div>
            <Text/>
            <Message/>
          </div>
        </div>
      </Layout>
    </Field>
  </Form>

export default LayoutExample