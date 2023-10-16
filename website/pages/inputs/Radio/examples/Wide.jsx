import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioWide = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Wide Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      wide
    />
  </Form>

export default RadioWide