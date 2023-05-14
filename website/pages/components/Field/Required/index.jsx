import React       from 'react'
import Example     from '../../../../site/Example.jsx'
import Required    from './Required.jsx'
import RequiredSrc from './Required.jsx?raw'
import SeeAlso     from '../../../../site/SeeAlso.jsx'

const RequiredExample = () =>
  <div>
    <h1>Field Validation</h1>
    <h2><code>required</code></h2>
    <p>
      You can add a <code>required</code> property to a field to mark it
      as being required.  This automatically adds a validator to the field
      to ensure that a value is provided when the form is submitted.
    </p>
    <Example
      Element={Required} code={RequiredSrc}
      caption="required" expand
    >
      <p>
        Try submitting the form without entering anything in the
        field input.
      </p>
    </Example>

    <SeeAlso
      links={[
        'field:showRequired',
        'field:requiredLabel',
        'field:requiredMessage',
        'field:validateOnBlur',
        'field:validateOnChange',
      ]}
    />
  </div>

export default RequiredExample