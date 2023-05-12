import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import LabelSrc      from './Label.jsx?raw'
import Label         from './Label.jsx'
import FormFieldsSrc from './FormFields.jsx?raw'
import FormFields    from './FormFields.jsx'
import SeeAlso       from '../../../../site/SeeAlso.jsx'
import { FieldLink, FormFieldsLink, FormLink } from '../../../../site/Links.jsx'

const LabelExamples = () =>
  <div>
    <h1>Field Properties</h1>

    <h2><code>label</code></h2>
    <p>
      Add a label to the field with the <code>label</code> property.
    </p>
    <Example
      Element={Label} code={LabelSrc}
      caption="name" expand
    />

    <p>
      Like all other field properties, they can be defined via <FormFieldsLink/>{' '}
      on the <FormLink/>.  If you explicitly set a <code>label</code> on the{' '}
      <FieldLink/> then it will take precedence.
    </p>

    <Example
      Element={FormFields} code={FormFieldsSrc}
      caption="Form fields" expand
    >
      <p>
        Note how the first field has the <code>label</code> defined in the{' '}
        <FormFieldsLink/> but the second defines its own <code>label</code>{' '}
        which is used instead of the one defined in the <FormFieldsLink/>.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:name',
        'form:fields',
      ]}
    />
  </div>


export default LabelExamples