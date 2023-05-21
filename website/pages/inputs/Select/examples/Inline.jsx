import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const InlineSelect = () =>
  <Form>
    <Field
      name="animal"
      type="select"
      label="What is your favourite animal?"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
      className="inline mar-r-option"
    />
    <Field
      name="food"
      type="select"
      label="What is your favourite number?"
      placeholder="Pick a number"
      options={[ 10, 11, 42, 69 ]}
      className="inline"
    />
  </Form>

export default InlineSelect