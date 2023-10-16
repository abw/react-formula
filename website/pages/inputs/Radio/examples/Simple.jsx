import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioSimple = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Simple Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
    />
  </Form>

export default RadioSimple
