import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'
import * as yup  from 'yup'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'
// PRETEND: import * as yup  from 'yup'

const fields = {
  vowels: {
    label: 'Enter Vowels Only',
    help: 'Enter between 3 and 5 vowels',
    validate: value => yup
      .string()
      .trim()
      .matches(/^[aeiou]*$/i, 'You should only type vowels')
      .min(3, 'You must enter at least three vowels')
      .max(5, 'You should not enter more than 5')
      .validate(value)

  }
}

const ValidateField = () =>
  <Form fields={fields}>
    <Field name="vowels"/>
    <Debug showForm={true}/>
  </Form>

export default ValidateField