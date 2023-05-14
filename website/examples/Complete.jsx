import React from 'react'
import { Form, Field, Fields, Debug, Reset, Changed } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Fields, Changed, Reset, Debug } from '@abw/react-formula'

const fields = {
  foo: {
    type:  'text',
    label: 'The foo field',
    required: true
  },
  bar: {
    type:  'text',
    label: 'The bar field',
  },
  price: {
    type:  'number',
    label: 'Price',
    prefix: '£',
    suffix: '.00',
    size: 20,
    min: 11,
    max: 100
  },
  scale: {
    type:  'range',
    label: 'Scale',
    min: 0,
    max: 100,
    step: 10
  },
  animal: {
    type:  'radio',
    label: 'Animal',
    options: [
      { value: 'badger', text: 'Brilliant Badger' },
      { value: 'ferret', text: 'Funky Ferret' },
      { value: 'stoat',  text: 'Sexy Stoat'  },
    ],
  },
  animal2: {
    type:  'radio',
    label: 'Animal',
    options: [
      { value: 'badger', text: 'Brilliant Badger' },
      { value: 'ferret', text: 'Funky Ferret' },
      { value: 'stoat',  text: 'Sexy Stoat'  },
    ],
  },
  colour: {
    type:  'radio',
    label: 'Favourite Colour?',
    options: [
      { value: 'red',    text: 'Red',    className: 'red' },
      { value: 'orange', text: 'Orange', className: 'orange' },
      { value: 'yellow', text: 'Yellow', className: 'yellow' },
      { value: 'green',  text: 'Green',  className: 'green' },
      { value: 'blue',   text: 'Blue',   className: 'blue' },
      { value: 'indigo', text: 'Indigo', className: 'indigo' },
      { value: 'violet', text: 'Violet', className: 'violet' },
    ]
  },
  number: {
    type:  'radio',
    label: 'Favourite Number?',
    options: [ 11, 42, 69 ]
  },
  food: {
    type:  'select',
    label: 'Favourite Food',
    options: [
      { value: 'chicken', text: 'Chicken' },
      { value: 'bacon',   text: 'Bacon'   },
      { value: 'cheese',  text: 'Cheese'  },
    ],
  },
}

const values = {
  foo: 'The foo value',
  animal: 'badger',
  scale: 50
}

const CompleteExample = () =>
  <Form fields={fields} values={values} showRequired={true} showOptional={true}>
    <Field name="foo"/>
    <Field name="bar" label="The bar field with a custom label"/>
    <Field name="bar" label="Bar field, different label and disabled" disabled/>
    <Fields names="price scale number colour animal"/>
    <Field name="animal2"
      inputsClass="radio inputs block"
      label="Stacked Radio Option"
    />
    <Field name="food"/>
    <Field name="one"   type="number"   label="A number field"/>
    <Field name="two"   type="date"     label="A date field"/>
    <Field name="three" type="password" label="A password field"/>
    <Field name="four"  type="color"    label="A color field"/>
    <Changed>
      <Reset text="Reset Form"/>
    </Changed>
    <Debug showForm={true}/>
  </Form>

export default CompleteExample
