import React from 'react'
import FieldLayout from '../../../lib/Field/Layout.jsx'
import { defaultConfig } from '../../../lib/Field/Config.js'

const mockField = {
  ...defaultConfig,
  label: 'Example Label',
  type: 'text',
  placeholder: 'Placeholder text',
  form: { },
  status: { }
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
      <FieldLayout
        field={{
          ...mockField,
          status: { focus: true }
        }}
      />

      <h3>Focussed Field With Value</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World',
          status: { focus: true }
        }}
      />

      <h3>Focussed Field With Help</h3>
      <FieldLayout
        field={{
          ...mockField,
          help: 'Your password must be between 11 and 42 characters',
          status: { focus: true }
        }}
      />

      <h3>Focussed Field With Prefix and Suffix</h3>
      <FieldLayout
        field={{
          ...mockField, prefix: '$', suffix: '.00',
          status: { focus: true }
        }}
      />

      <h3>Valid Field</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World',
          status: { valid: true }
        }}
      />

      <h3>Valid Field With Message</h3>
      <FieldLayout
        field={{
          ...mockField,
          message: 'That username is available!',
          status: { valid: true }
        }}
      />

      <h3>Valid Field With Prefix and Suffix</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World', prefix: '$', suffix: '.00',
          status: { valid: true }
        }}
      />

      <h3>Focussed Valid Field With Prefix and Suffix</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World', prefix: '$', suffix: '.00',
          status: { valid: true, focus: true }
        }}
      />

      <h3>Invalid Field</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World',
          status: { invalid: true }
        }}
      />

      <h3>Invalid Field With Message</h3>
      <FieldLayout
        field={{
          ...mockField,
          message: 'Something went wrong!',
          status: { invalid: true }
        }}
      />

      <h3>Invalid Field With Prefix and Suffix</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World', prefix: '$', suffix: '.00',
          status: { invalid: true }
        }}
      />

      <h3>Focussed Invalid Field With Prefix and Suffix</h3>
      <FieldLayout
        field={{
          ...mockField,
          value: 'Hello World', prefix: '$', suffix: '.00',
          status: { invalid: true, focus: true }
        }}
      />

      <h3>Disabled Field</h3>
      <FieldLayout
        field={{
          ...mockField,
          prefix: '£', message: 'Denied!',
          status: { disabled: true }
        }}
      />


    </form>
  </div>

export default Fields