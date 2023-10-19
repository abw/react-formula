import React                from 'react'
import ShowRequired         from './examples/ShowRequired.jsx'
import ShowRequiredSrc      from './examples/ShowRequired.jsx?raw'
import ShowRequiredForm     from './examples/ShowRequiredForm.jsx'
import ShowRequiredFormSrc  from './examples/ShowRequiredForm.jsx?raw'
import Example              from '@/site/Example.jsx'
import SeeAlso              from '@/site/SeeAlso.jsx'
import { FieldLink, FormLink, RequiredLink } from '@/site/Links.jsx'

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