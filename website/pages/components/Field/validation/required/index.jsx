import React        from 'react'
import Required     from './examples/Required.jsx'
import RequiredSrc  from './examples/Required.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import Split        from '@/site/Split.jsx'
import Suggest      from '@/site/Suggest.jsx'

const RequiredExample = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>required</code></h2>
    <Split align="end">
      <p>
        You can add a <code>required</code> property to a field to mark it
        as being required.  This automatically adds a validator to the field
        to ensure that a value is provided when the form is submitted.
      </p>
      <Suggest>
        Try submitting the form without entering anything in the
        field input.
      </Suggest>
    </Split>
    <Example
      Element={Required} code={RequiredSrc}
      caption="required" expand
    />

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