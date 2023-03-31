import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const SelectExample = () =>
  <Form>
    <Field
      name="animal" label="What is your favourite animal?" type="select"
      options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food" label="What is your favourite number?" type="select"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: <>Forty-Two (the meaning of <i>life</i>)</> },
      ]}
    />
    <Debug/>
  </Form>

export default SelectExample