import { Form, Field, Submit } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Submit } from '@abw/react-formula'

const OnClick = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Submit
      onClick={
        e => {
          e.preventDefault()
          window.alert('The form submission was intercepted!')
        }
      }
    />
  </Form>

export default OnClick