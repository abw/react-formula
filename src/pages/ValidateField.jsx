import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/ValidateField.jsx?raw'
import Element from '../examples/ValidateField.jsx'

const ValidateField = () =>
  <div>
    <h1>Validating Fields</h1>
    <Example Element={Element} code={Source}>
      <p>
        You can add a <code className="code">validate</code> function to
        a field to validate the value.
      </p>
    </Example>
  </div>

export default ValidateField