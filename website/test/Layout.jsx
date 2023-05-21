import React from 'react'
import { Form, Field, Submit } from '../../lib/index.js'

const LayoutTest = () =>
  <div>
    <h1>Layout Test</h1>
    <p>
      This is a test to ensure that all fields are the same size and line
      up properly with each other.  This is no mean feat.
    </p>
    <Form>
      <div className="grid-2 start gap-h-2">
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
      </div>
      <p>
        These components are aligned to the start of the grid container.
        The submit button has the <code>mar-t-label</code> class which adds
        a margin to the top equivalent to the height of the label and margin
        between the label and input.  The input and button should align
        perfectly.
      </p>
      <div className="grid-2 start gap-h-2">
        <Field
          name="eleven"
          label="Button has mar-t-label"
        />
        <Submit className="mar-t-label"/>
      </div>
      <p>
        These components are aligned to the end of the grid container.
        The submit button has the <code>mar-b-field</code> class which adds
        a margin to the bottom equivalent to the margin on the bottom of the
        input field.  They should also align perfectly.
      </p>
      <div className="grid-2 end gap-h-2">
        <Field
          name="eleven"
          label="Button has mar-b-field"
        />
        <Submit className="mar-b field"/>
      </div>
    </Form>
  </div>

export default LayoutTest