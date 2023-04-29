import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const SelectExample = () =>
  <Form>
    <Field
      name="animal" label="What is your favourite animal?" type="select"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food" label="What is your favourite number?" type="select"
      placeholder="Pick a number"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: 'Forty-Two (the meaning of life)' },
        { value: 69, text: 'Sixty nine, dude!', disabled: true }
      ]}
    />
  </Form>

export default SelectExample