import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import Validate       from './Validate.jsx'
import ValidateSrc    from './Validate.jsx?raw'
import { FieldLink, FormLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'
import Split from '../../../../site/Split.jsx'
import Suggest from '../../../../site/Suggest.jsx'

const ValidateExamples = () =>
  <div className="prose">
    <h1>Field Validation</h1>

    <h2><code>validateOnBlur</code></h2>
    <Split>
      <p>
        The <code>validateOnBlur</code> property can be set to trigger
        validation whenever a field is blurred.  You can set it on individual{' '}
        <FieldLink/> components or on the parent <FormLink/> to have it apply
        to all fields.
      </p>
      <Suggest>
        Try switching focus from one field to another without entering
        anything.  You should see the custom validation errors when each
        field is blurred.
      </Suggest>
    </Split>
    <Example
      Element={Validate} code={ValidateSrc}
      caption="validate"
    />

    <SeeAlso
      links={[
        'field:required',
        'field:validate',
        'field:validateOnChange',
      ]}
    />
  </div>


export default ValidateExamples