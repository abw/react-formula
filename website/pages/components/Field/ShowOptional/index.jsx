import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import ShowOptional     from './ShowOptional.jsx'
import ShowOptionalSrc  from './ShowOptional.jsx?raw'
import SeeAlso          from '../../../../site/SeeAlso.jsx'
import { FieldLink, FormLink, OptionalLabelLink, RequiredLink } from '../../../../site/Links.jsx'

const ShowOptionalExample = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>showOptional</code></h2>
    <p>
      If a field is <b>NOT</b> marked as <RequiredLink/> then it is optional.
      If you set the <code>showOptional</code> property then it will add an
      additional label to a field to indicate that it&apos;s optional.  You
      can set the property on individual <FieldLink/> components or on the
      parent <FormLink/> to act as a default for all fields.
    </p>
    <p>
      You can use the <OptionalLabelLink/> property to change the text of the
      label that is displayed.
    </p>
    <Example
      Element={ShowOptional} code={ShowOptionalSrc}
      caption="showOptional" expand
    />
    <SeeAlso
      links={[
        'field:required',
        'field:optionalLabel',
        'field:showRequired',
        'field:requiredLabel',
      ]}
    />

  </div>

export default ShowOptionalExample