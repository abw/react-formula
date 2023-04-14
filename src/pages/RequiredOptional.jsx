import React from 'react'
import Example from '../site/Example.jsx'
import Source from '../examples/RequiredOptional.jsx?raw'
import Element from '../examples/RequiredOptional.jsx'

const RequiredOptional = () =>
  <div>
    <h1>Required and Optional Fields</h1>
    <Example Element={Element} code={Source}>
      <p>
        You can add a <code className="code">required</code> property to a
        field to mark it as being required.  This automatically adds a
        validator to the field to ensure that a value is provided when the
        form is submitted.  If you set the {' '}
        <code className="code">showRequired</code> form property to{' '}
        <code className="code">true</code> then it will mark the required
        fields as shown in the examples below.  Or you can use{' '}
        <code className="code">showOptional</code> to show the fields that
        aren&apos;t required.
      </p>
      <p>
        You can change the text that&apos;s display for required or optional
        fields by setting <code className="code">requiredText</code> and{' '}
        <code className="code">optionalText</code> respectively.  You can
        set these on individual fields or on the form.
      </p>
    </Example>
  </div>

export default RequiredOptional