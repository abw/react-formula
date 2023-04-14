import React from 'react'
import Example from '../../../site/Example.jsx'
import ShowRequiredSource  from './examples/ShowRequired.jsx?raw'
import ShowRequiredExample from './examples/ShowRequired.jsx'
import RequiredTextSource  from './examples/RequiredText.jsx?raw'
import RequiredTextExample from './examples/RequiredText.jsx'
import ShowOptionalSource  from './examples/ShowOptional.jsx?raw'
import ShowOptionalExample from './examples/ShowOptional.jsx'
import OptionalTextSource  from './examples/OptionalText.jsx?raw'
import OptionalTextExample from './examples/OptionalText.jsx'

const RequiredOptional = () =>
  <div>
    <h1>Required and Optional Fields</h1>

    <Example
      Element={ShowRequiredExample} code={ShowRequiredSource}
      caption="showRequired"
    >
      <p>
        You can add a <code>required</code> property to a field to mark it
        as being required.  This automatically adds a validator to the field
        to ensure that a value is provided when the form is submitted.  If
        you set the {' '} <code>showRequired</code> property on either the{' '}
        <code>Form</code> or <code>Field</code> then it will mark the required
        fields as shown in the examples below.
      </p>
    </Example>

    <Example
      Element={RequiredTextExample} code={RequiredTextSource}
      caption="requiredText"
    >
      <p>
        You can change the text that&apos;s display for required fields by
        setting <code className="code">requiredText</code> property on the{' '}
        <code>Form</code> or on individual <code>Field</code> components.
      </p>
    </Example>

    <Example
      Element={ShowOptionalExample} code={ShowOptionalSource}
      caption="showOptional"
    >
      <p>
        If you set the <code>showOptional</code> property on either the{' '}
        <code>Form</code> or <code>Field</code> then it will mark the optional
        fields as shown in the examples below.
      </p>
    </Example>

    <Example
      Element={OptionalTextExample} code={OptionalTextSource}
      caption="optionalText"
    >
      <p>
        You can change the text that&apos;s display for optional fields by
        setting <code className="code">optionalText</code> property on the{' '}
        <code>Form</code> or on individual <code>Field</code> components.
      </p>
    </Example>
  </div>

export default RequiredOptional