import React from 'react'
import { FieldLayout } from '../../lib/index.js'

const mockField = {
  label: 'Example Label',
  type: 'text',
  placeholder: 'Placeholder text',
  form: { }
}

const FormStyles = () =>
  <div>
    <h1>Form Styles</h1>
    <p>
      NOTE: these are mockup fields and don&apos;t have full interactivity.
      For example, clicking on an input will not automatically focus it.
    </p>
    <form className="formula">
      <h3>Field With Placeholder Text</h3>
      <FieldLayout field={mockField}/>

      <h3>Focussed Field With Placeholder Text</h3>
      <FieldLayout field={{...mockField, focus: true }}/>

      <h3>Field With Text</h3>
      <FieldLayout field={{...mockField, value: 'Hello World'}}/>

      <h3>Field With Required Label</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', required: true, showRequired: true }}/>

      <h3>Field With Optional Label</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', showOptional: true }}/>

      <h3>Valid Field</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', valid: true }}/>

      <h3>Invalid Field</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', invalid: true }}/>
    </form>
  </div>

export default FormStyles