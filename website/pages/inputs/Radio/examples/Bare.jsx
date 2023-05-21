import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const BareRadio = () =>
  <Form>
    <Field
      name="cheese" label="What is your favourite cheese?" type="radio"
      options={[ 'Cheddar', 'Brie', 'Emmental' ]}
      className="bare inline"
    />
  </Form>

export default BareRadio