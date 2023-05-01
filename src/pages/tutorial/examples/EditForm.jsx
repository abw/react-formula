import { Form, Fields, ResetSubmit } from '../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Fields, ResetSubmit, Debug } from '@abw/react-formula'

const fields = {
  name: {
    label:    'Product Name',
    required: true
  },
  description: {
    label:    'Description',
    type:     'textarea',
    required: true,
  },
  manufacturer: {
    label:    'Manufacturer',
    type:     'select',
    debug:    true,
    options:  [
      { value: '100', text: "Alan's Accessories" },
      { value: '101', text: "Brian's Bits" },
      { value: '102', text: "Charlie's Components" },
    ],
  },
  price: {
    type:  'number',
    label: 'Price?',
    prefix: '$',
  },
}

const values = {
  id:           '9876',
  name:         'Widget-2000',
  description:  'This is an awesome widget',
  manufacturer: '102',
  price:        12.99
}

const EditForm = () =>
  <Form fields={fields} values={values}>
    <Fields names="name description manufacturer price"/>
    <ResetSubmit submit={{ text: 'Save Changes' }}/>
  </Form>

export default EditForm