import React from 'react'
import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const ShowAll = () =>
  <Form>
    <Field name="message" label="Message"/>
    <Debug showAll/>
  </Form>

export default ShowAll