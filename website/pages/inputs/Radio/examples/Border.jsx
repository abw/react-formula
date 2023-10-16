import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioBorder = () =>
  <Form>
    <Field
      type="radio"
      name="animal1"
      label="Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-r-2"
      border
    />
    <Field
      type="radio"
      name="animal2"
      label="Wide Border Options"
      options={['Badger', 'Ferret', 'Stoat', 'Weasel']}
      optionClass="mar-b-2"
      border wide
    />
  </Form>

export default RadioBorder