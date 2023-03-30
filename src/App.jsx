import React from 'react'
import { Field, Form, Debug, Reset, Changed } from '../lib/index.js'
import './App.css'

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
    options: [ 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet' ]
  },
  number: {
    type:  'radio',
    label: 'Favourite Number?',
    options: [ 11, 42, 69 ]
  }
}

const App = () => {
  return (
    <div className="App">
      <section>
        <h1>First Form</h1>
        <Form fields={fields} showRequired={true} values={{ animal: 'badger' }}>
          <Field name="foo"/>
          <Field name="bar" label="The bar field with a custom label"/>
          <Field name="bar" label="Same bar field, different label"/>
          <Field name="price"/>
          <Field name="scale"/>
          <Field name="number"/>
          <Field name="colour"/>
          <Field name="animal"/>
          <Field name="animal2" inputsClass="radio inputs block" label="Stacked Radio Option"/>
          <Reset text="Reset Form" onClick={() => window.alert('form has been reset')}/>
          <Debug/>
        </Form>
      </section>
      <section>
        <h1>Second Form</h1>
        <Form
          fields={fields}
          values={{ foo: 'Initial foo value', bar: 'Initial bar value', baz: 'Hidden Value', badger: true }}
        >
          <Field name="foo"/>
          <Field name="bar" label="The bar field in the second form"/>
          <Field name="blurb" label="Some Blurb" type="textarea"/>
          <Field name="badger" label="Are you a badger?" type="checkbox" text="Yes I am"/>
          <Field
            name="wiz"
            render={
              field => <div className="field">
                <label>{field.label || field.name}</label>
                <div className="inputs">
                  <input type="text" value={field.value} onChange={e => field.set(e.target.value)}/>
                </div>
              </div>
            }
          />
          <Changed>
            <Reset text="Reset Form"/>
            <Debug/>
          </Changed>
        </Form>
      </section>
    </div>
  )
}

export default App
