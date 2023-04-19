import React from 'react'
import { Form, Field, Submit } from '../../lib/index.js'

const LayoutTest = () =>
  <div>
    <h1>Layout Test</h1>
    <Form>
      <div className="grid-2 end gap-h-2">
        <Field
          name="one"
          label="Text Field"
        />
        <Field
          name="two"
          className="wide"
          label="Checkbox Field"
          type="checkbox"
          text="This is a checkbox"
        />
        <Field
          name="three"
          label="Text Field"
        />
        <Field name="four"
          label="Select Field"
          type="select"
          options={['One', 'Two', 'Three']}
        />
        <Field
          name="five"
          label="Text Field"
        />
        <Field name="size"
          label="Radio Field"
          type="radio"
          options={['One', 'Two', 'Three']}
        />
        <Field
          name="seven"
          label="Text Field"
        />
        <Field name="eight"
          label="Date Field"
          type="date"
        />
        <Field
          name="nine"
          label="Text Field"
        />
        <Field name="ten"
          label="Number Field"
          type="number"
        />
        <Field
          name="eleven"
          label="Text Field - it's one louder"
        />
        <Submit/>
      </div>
    </Form>
  </div>

export default LayoutTest