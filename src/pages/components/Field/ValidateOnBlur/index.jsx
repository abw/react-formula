import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import Validate       from './Validate.jsx'
import ValidateSrc    from './Validate.jsx?raw'
import { FieldLink, FormLink } from '../../../../site/Links.jsx'

const ValidateExamples = () =>
  <div>
    <h1>Validation</h1>

    <h2><code>validateOnBlur</code></h2>
    <p>
      The <code>validateOnBlur</code> property can be set to trigger
      validation whenever a field is blurred.  You can set it on individual{' '}
      <FieldLink/> components or on the parent <FormLink/> to have it apply
      to all fields.
    </p>
    <Example
      Element={Validate} code={ValidateSrc}
      caption="validate"
    >
      <p>
        Try switching focus from one field to another without entering
        anything.  You should see the custom validation errors when each
        field is blurred.
      </p>
    </Example>
  </div>


export default ValidateExamples