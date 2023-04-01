import React from 'react'
import { FieldLayout } from '../../lib/index.js'

const mockField = {
  label: 'Example Label',
  type: 'text',
  placeholder: 'Placeholder text',
  form: { }
}

const FieldStyles = () =>
  <div>
    <h1>Field Styles</h1>
    <div className="note">
      <b>NOTE:</b> these are mockup fields and don&apos;t have full interactivity.
      For example, clicking on an input will not automatically focus it.
    </div>
    <form className="formula">
      <h3>Field With Placeholder Text</h3>
      <FieldLayout field={mockField}/>

      <h3>Focussed Field With Placeholder Text</h3>
      <FieldLayout field={{...mockField, focus: true }}/>

      <h3>Field With Text</h3>
      <FieldLayout field={{...mockField, value: 'Hello World'}}/>

      <h3>Focussed Field With Text</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', focus: true }}/>

      <h3>Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, prefix: '$', suffix: '.00'}}/>

      <h3>Focussed Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, prefix: '$', suffix: '.00', focus: true }}/>

      <h3>Valid Field</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', valid: true }}/>

      <h3>Valid Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', prefix: '$', suffix: '.00', valid: true }}/>

      <h3>Invalid Field</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', invalid: true }}/>

      <h3>Invalid Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', prefix: '$', suffix: '.00', invalid: true }}/>

      <h3>Field With Required Label</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', required: true, showRequired: true }}/>

      <h3>Field With Optional Label</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', showOptional: true }}/>

      <h3>Field With Help</h3>
      <FieldLayout field={{...mockField, help: 'Your password must be between 11 and 42 characters'}}/>

      <h3>Field With Valid Message</h3>
      <FieldLayout field={{...mockField, message: 'That username is available!', valid: true }}/>

      <h3>Field With Invalid Message</h3>
      <FieldLayout field={{...mockField, message: 'Something went wrong!', invalid: true }}/>

    </form>
  </div>

export default FieldStyles