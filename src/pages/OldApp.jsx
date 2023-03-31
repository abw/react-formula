import React from 'react'
import { Field, Form, Debug, Reset, Changed } from '../lib/index.js'
import './App.css'
import '../styles/formula.scss'
import '../styles/dev.scss'

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

const App = () => {
  return (
    <div className="App">
      <section>
        <h1>First Form</h1>
        <Form fields={fields} showRequired={true} values={{ animal: 'badger' }}>
          <Field name="foo"/>
          <Field name="bar" label="The bar field with a custom label"/>
          <Field name="bar" label="Same bar field, different label" disabled/>
          <Field name="price"/>
          <Field name="scale"/>
          <Field name="number"/>
          <Field name="colour"/>
          <Field name="animal"/>
          <Field name="animal2" inputsClass="radio inputs block" label="Stacked Radio Option"/>
          <Field name="food"/>
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
          <div className="flex space">
            <div className="wide mar-r">
              <Field name="bar" label="The bar field in the second form"/>
            </div>
            <div className="mar-r">
              <Field name="badger" label="Are you a badger lover?" type="checkbox" text="Yes I am"/>
            </div>
            <div>
              <Field name="food"/>
            </div>
          </div>
          <Field name="blurb" label="Some Blurb" type="textarea"/>
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
