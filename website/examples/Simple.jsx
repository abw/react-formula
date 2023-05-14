import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const SimpleExample = () =>
  <Form>
    <Field
      name="name" label="Enter your name"
      placeholder="Your Name"
    />
    <Field
      name="message" label="Enter a message"
      placeholder="A message"
    />
    <Field
      name="badger" label="Do you like Badgers?"
      type="checkbox" text="Yes, I like badgers!"
    />
    <Field
      name="animal" label="What is your favourite animal?"
      type="radio" options={[ 'Badger', 'Ferret', 'Stoat' ]}
    />
    <Field
      name="food" label="What is your favourite food?"
      type="select" options={[ 'Cheese', 'Bacon', 'Lettuce' ]}
    />
    <Debug/>
  </Form>

export default SimpleExample