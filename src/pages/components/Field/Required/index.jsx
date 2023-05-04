import React       from 'react'
import Example     from '../../../../site/Example.jsx'
import Required    from './Required.jsx'
import RequiredSrc from './Required.jsx?raw'
import RequiredBlur    from './RequiredBlur.jsx'
import RequiredBlurSrc from './RequiredBlur.jsx?raw'
import { FieldLink, FormLink, ValidateOnBlurLink } from '../../../../site/Links.jsx'
// import { FieldLink, FormLink } from '../../../../site/Links.jsx'

const RequiredExample = () =>
  <div>
    <h1>Required Fields</h1>
    <h2><code>required</code></h2>
    <p>
      You can add a <code>required</code> property to a field to mark it
      as being required.  This automatically adds a validator to the field
      to ensure that a value is provided when the form is submitted.
    </p>
    <Example
      Element={Required} code={RequiredSrc}
      caption="required"
    >
      <p>
        Try submitting the form without entering anything in the
        &quot;Required Field&quot; input.
      </p>
    </Example>

    <h2><code>validateOnBlur</code></h2>
    <p>
      By default, validation will happen when the
      field is submitted. You can set <ValidateOnBlurLink/> option
      to force validation to happen when a field is
      blurred (i.e. when the user moves focus away from a field).  This
      can be set either on individual <FieldLink/> components or on the
      parent <FormLink/> to act as the default for all fields.
    </p>
    <Example
      Element={RequiredBlur} code={RequiredBlurSrc}
      caption="validateOnBlur"
    >
      <p>
        Try focussing on one field and then move to another without
        entering anything.
      </p>
    </Example>
  </div>

export default RequiredExample