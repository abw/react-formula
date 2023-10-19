import React             from 'react'
import OptionalLabelSrc  from './examples/OptionalLabel.jsx?raw'
import OptionalLabel     from './examples/OptionalLabel.jsx'
import Example           from '@/site/Example.jsx'
import SeeAlso           from '@/site/SeeAlso.jsx'
import {
  FieldLink, FormLink, RequiredLink, ShowOptionalLink
} from '@/site/Links.jsx'

const OptionalLabelExample = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>optionalLabel</code></h2>
    <p>
      You can use the <code className="code">optionalLabel</code> property
      to change the label that is display for optional fields (i.e. those that
      aren&apos;t marked as <RequiredLink/>) that have the{' '}
      <ShowOptionalLink/> option set.  You can set it on individual{' '}
      <FieldLink/> components or on the parent <FormLink/> to act as a default
      for all fields.
    </p>
    <Example
      Element={OptionalLabel} code={OptionalLabelSrc}
      caption="optionalLabel" expand
    />
    <SeeAlso
      links={[
        'field:required',
        'field:showRequired',
        'field:showOptional',
        'field:requiredLabel',
      ]}
    />
  </div>

export default OptionalLabelExample