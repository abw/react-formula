import React from 'react'
import { Form, Field } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioWide = () =>
  <Form>
    <Field
      name="food" label="What is your favourite number?" type="radio"
      options={[
        { value: 10, text: 'Ten' },
        { value: 11, text: 'Eleven (one louder)', className: 'bold' },
        { value: 42, text: <>Forty-Two (the meaning of <i>life</i>)</> },
      ]}
      className="wide"
    />
  </Form>

export default RadioWide