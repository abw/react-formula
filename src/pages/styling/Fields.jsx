import React from 'react'
import FieldLayout from '../../../lib/Field/Layout.jsx'

const mockField = {
  label: 'Example Label',
  type: 'text',
  placeholder: 'Placeholder text',
  form: { }
}

const Fields = () =>
  <div>
    <h1>Field Styles</h1>
    <div className="note">
      <b>NOTE:</b> these are mockup fields and don&apos;t have full interactivity.
      For example, clicking on an input will not automatically focus it.
    </div>
    <form className="formula">
      <h3>Field With Placeholder Text</h3>
      <FieldLayout field={mockField}/>

      <h3>Field With Value</h3>
      <FieldLayout field={{...mockField, value: 'Hello World'}}/>

      <h3>Field With Help</h3>
      <FieldLayout field={{...mockField, help: 'Your password must be between 11 and 42 characters'}}/>

      <h3>Field With Required Label</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', required: true, showRequired: true }}/>

      <h3>Field With Optional Label</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', showOptional: true }}/>

      <h3>Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, prefix: '$', suffix: '.00'}}/>

      <h3>Focussed Field With Placeholder Text</h3>
      <FieldLayout field={{...mockField, focus: true }}/>

      <h3>Focussed Field With Value</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', focus: true }}/>

      <h3>Focussed Field With Help</h3>
      <FieldLayout field={{...mockField, help: 'Your password must be between 11 and 42 characters', focus: true }}/>

      <h3>Focussed Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, prefix: '$', suffix: '.00', focus: true }}/>

      <h3>Valid Field</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', valid: true }}/>

      <h3>Valid Field With Message</h3>
      <FieldLayout field={{...mockField, message: 'That username is available!', valid: true }}/>

      <h3>Valid Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', prefix: '$', suffix: '.00', valid: true }}/>

      <h3>Invalid Field</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', invalid: true }}/>

      <h3>Invalid Field With Message</h3>
      <FieldLayout field={{...mockField, message: 'Something went wrong!', invalid: true }}/>

      <h3>Invalid Field With Prefix and Suffix</h3>
      <FieldLayout field={{...mockField, value: 'Hello World', prefix: '$', suffix: '.00', invalid: true }}/>

      <h3>Disabled Field</h3>
      <FieldLayout field={{...mockField, disabled: true, prefix: '£', message: 'Denied!' }}/>


    </form>
  </div>

export default Fields