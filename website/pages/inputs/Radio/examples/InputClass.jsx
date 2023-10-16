import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioInputClass = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Input Class"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      inputClass="larger"
    />
  </Form>

export default RadioInputClass