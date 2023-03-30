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
    type:  'text',
    label: 'Price',
    prefix: '£',
    suffix: '.00'
  }
}

const App = () => {
  return (
    <div className="App">
      <section>
        <h1>First Form</h1>
        <Form fields={fields} showRequired={true}>
          <Field name="foo"/>
          <Field name="bar" label="The bar field with a custom label"/>
          <Field name="bar" label="Same bar field, different label"/>
          <Field name="price"/>
          <Reset text="Reset Form" onClick={() => window.alert('form has been reset')}/>
          <Debug/>
        </Form>
      </section>
      <section>
        <h1>Second Form</h1>
        <Form fields={fields} values={{ foo: 'Initial foo value', bar: 'Initial bar value', baz: 'Hidden Value' }}>
          <Field name="foo"/>
          <Field name="bar" label="The bar field in the second form"/>
          <Field
            name="wiz"
            render={
              field => <div className="field">
                <label>{field.label || field.name}</label>
                <input type="text" value={field.value} onChange={e => field.set(e.target.value)}/>
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
