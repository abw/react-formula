import React from 'react'
import { Form, Field, Debug } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const Show = () =>
  <Form>
    <Field
      name="message" label="Message"
    />
    <Field
      name="animal" label="Animal" type="select"
      options={['Anteater', 'Badger', 'Camel']}
    />
    <Field
      name="terms" label="Terms and Conditions" type="checkbox"
      text="I agree to the Terms and Conditions"
    />
    <Debug show={{ values: true, status: true, config: true }}/>
  </Form>

export default Show