import { Form, Field } from '@/lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const Wide = () =>
  <Form>
    <Field
      name="zero"
      label="Narrow Text Field"
    />
    <Field
      name="one"
      label="Text Field"
    />
    <Field
      name="two"
      label="Text Area Field"
      type="textarea"
    />
    <Field
      name="three"
      label="Select Field"
      type="select"
      options={['Badger', 'Ferret', 'Stoat']}
    />
    <Field
      name="four"
      label="Checkbox Field"
      type="checkbox"
      text="Badgers are cool"
    />
    <Field
      name="five"
      label="Radio Button Field"
      type="radio"
      options={['Badger', 'Ferret', 'Stoat']}
    />
  </Form>

export default Wide