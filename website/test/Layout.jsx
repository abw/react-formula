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
      <div className="grid-2 start gap-h-4">
        <Field
          name="seven"
          label="Text Field"
        />
        <Field name="ten"
          label="Number Field"
          type="number"
        />
        <Field
          name="nine"
          label="Text Field"
        />
        <Field name="eight"
          label="Date Field"
          type="date"
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
          name="one"
          label="Text Field"
        />
        <Field
          name="two"
          label="Checkbox Field"
          type="checkbox"
          text="This is a checkbox"
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
          name="five"
          label="Text Field"
        />
        <Field name="size"
          label="Textarea Field"
          type="textarea"
        />
      </div>

      <h2 className="mar-t-8">Text</h2>
      <div className="grid-2 start gap-h-4">
        <Field
          name="text1"
          label="Text Field"
        />
        <Field
          name="text2"
          className="fluid"
          label="Fluid Text Field"
        />
      </div>
      <div>
        <Field
          name="text3"
          className="inline mar-r-4"
          label="Inline Text Field"
        />
        <Field
          name="text4"
          className="inline mar-r-4"
          label="Inline Text Field"
        />
        <Field
          name="text5"
          className="inline"
          label="Inline Text Field"
        />
      </div>

      <h2 className="mar-t-8">Textarea</h2>
      <div className="grid-2 start gap-h-4">
        <Field
          name="text1"
          type="textarea"
          label="Textarea Field"
        />
        <Field
          name="text2"
          type="textarea"
          className="fluid"
          label="Fluid Textarea Field"
        />
      </div>
      <div>
        <Field
          name="textarea3"
          type="textarea"
          className="inline mar-r-4"
          label="Inline Textarea Field"
        />
        <Field
          name="textarea4"
          type="textarea"
          className="inline mar-r-4"
          label="Inline Textarea Field"
        />
        <Field
          name="textarea5"
          type="textarea"
          className="inline"
          label="Inline Textarea Field"
        />
      </div>

      <h2 className="mar-t-8">Select</h2>
      <div className="grid-2 start gap-h-4">
        <Field
          name="select1"
          label="Select"
          type="select"
          placeholder="Select"
          options={['One', 'Two', 'Three']}
        />
        <Field
          name="select2"
          label="Fluid Select"
          className="fluid"
          type="select"
          placeholder="Fluid Select"
          options={['One', 'Two', 'Three']}
        />
      </div>
      <div>
        <Field
          name="select3"
          label="Inline Select"
          className="inline mar-r-4"
          type="select"
          placeholder="Select"
          options={['One', 'Two', 'Three']}
        />
        <Field
          name="select4"
          label="Inline Select"
          className="inline mar-r-4"
          type="select"
          placeholder="Select"
          options={['One', 'Two', 'Three']}
        />
        <Field
          name="select5"
          label="Inline Select"
          className="inline"
          type="select"
          placeholder="Select"
          options={['One', 'Two', 'Three']}
        />
      </div>


      <h2 className="mar-t-8">Checkbox</h2>
      <div className="grid-2 start gap-h-4">
        <Field
          name="checkbox1"
          label="Checkbox"
          type="checkbox"
          text="Checkbox"
        />
        <Field
          name="checkbox3"
          label="Fluid Checkbox"
          className="fluid"
          type="checkbox"
          text="Fluid Checkbox"
        />
        <Field
          name="checkbox2"
          label="Bare Checkbox"
          className="bare"
          type="checkbox"
          text="Bare Checkbox"
        />
        <Field
          name="checkbox4"
          label="Bare Fluid Checkbox"
          className="bare fluid"
          type="checkbox"
          text="Bare Fluid Checkbox"
        />
      </div>
      <div className="">
        <Field
          name="checkbox5"
          label="Inline Checkbox"
          className="inline mar-r-4"
          type="checkbox"
          text="Checkbox"
        />
        <Field
          name="checkbox6"
          label="Inline Checkbox"
          className="inline mar-r-4"
          type="checkbox"
          text="Checkbox"
        />
        <Field
          name="checkbox7"
          label="Inline Checkbox"
          className="inline mar-r-4"
          type="checkbox"
          text="Checkbox"
        />
      </div>

      <h2 className="mar-t-8">Radio</h2>
      <div className="grid-2 start gap-h-4">
        <Field
          name="radio1"
          label="Radio"
          type="radio"
          options={['One', 'Two', 'Three']}
        />
        <Field
          name="radio2"
          label="Fluid Radio"
          className="fluid"
          type="radio"
          options={['One', 'Two', 'Three']}
        />
      </div>
      <div className="">
        <Field
          name="radio2"
          label="Inline Radio"
          className="inline"
          type="radio"
          options={['One', 'Two', 'Three']}
        />
      </div>
      <h2 className="mar-t-8">Prefix and Suffix</h2>
      <div className="grid-2 start gap-h-4">
        <Field
          name="prefix1"
          label="Prefix Text"
          prefix="X"
        />
        <Field
          name="suffix1"
          label="Suffix Text"
          suffix="Y"
        />
        <Field
          name="prefix2"
          type="textarea"
          label="Prefix Textarea"
          prefix="X"
        />
        <Field
          name="suffix2"
          type="textarea"
          label="Suffix Textarea"
          suffix="Y"
        />
        <Field
          name="prefix3"
          type="select"
          label="Prefix Select"
          prefix="X"
          options={[100, 200, 300]}
        />
        <Field
          name="suffix3"
          type="select"
          label="Suffix Select"
          suffix="Y"
          options={[100, 200, 300]}
        />
        <Field
          name="prefix4"
          type="checkbox"
          label="Prefix Checkbox"
          prefix="X"
          text="Checkbox"
        />
        <Field
          name="suffix4"
          type="checkbox"
          label="Suffix Checkbox"
          suffix="Y"
          text="Checkbox"
        />
      </div>


      <h2 className="mar-t-8">Alignment Utilities</h2>
      <p>
        These components are aligned to the start of the grid container.
        The submit button has the <code>mar-t-label</code> class which adds
        a margin to the top equivalent to the height of the label and margin
        between the label and input.  The input and button should align
        perfectly.
      </p>
      <div className="grid-2 start gap-h-4">
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
      <div className="grid-2 end gap-h-4">
        <Field
          name="eleven"
          label="Button has mar-b-field"
        />
        <Submit className="mar-b field"/>
      </div>

    </Form>
  </div>

export default LayoutTest