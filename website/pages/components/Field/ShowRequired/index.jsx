import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import ShowRequired     from './ShowRequired.jsx'
import ShowRequiredSrc  from './ShowRequired.jsx?raw'
import ShowRequiredForm     from './ShowRequiredForm.jsx'
import ShowRequiredFormSrc  from './ShowRequiredForm.jsx?raw'
import { FieldLink, FormLink, RequiredLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const ShowRequiredExample = () =>
  <div className="prose">
    <h1>Field Validation</h1>

    <h2><code>showRequired</code></h2>
    <p>
      If a <FieldLink/> is marked as <RequiredLink/> then the{' '}
      <code>showRequired</code> property can be added to have an additional
      label displayed indicating that it is required.
    </p>
    <Example
      Element={ShowRequired} code={ShowRequiredSrc}
      caption="showRequired on Field" expand
    />

    <p>
      The <code>showRequired</code> property can also be added to the{' '}
      <FormLink/> to have it apply to all <RequiredLink/> fields.
    </p>
    <Example
      Element={ShowRequiredForm} code={ShowRequiredFormSrc}
      caption="showRequired on Form" expand
    />

    <SeeAlso
      links={[
        'field:required',
        'field:requiredLabel',
        'field:showOptional',
        'field:optionalLabel',
      ]}
    />
  </div>

export default ShowRequiredExample