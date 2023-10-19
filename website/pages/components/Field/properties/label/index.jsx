import React         from 'react'
import LabelSrc      from './examples/Label.jsx?raw'
import Label         from './examples/Label.jsx'
import FormFieldsSrc from './examples/FormFields.jsx?raw'
import FormFields    from './examples/FormFields.jsx'
import Example       from '@/site/Example.jsx'
import SeeAlso       from '@/site/SeeAlso.jsx'
import Split         from '@/site/Split.jsx'
import Suggest       from '@/site/Suggest.jsx'
import { FieldLink, FormFieldsLink, FormLink } from '@/site/Links.jsx'

const LabelExamples = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>label</code></h2>
    <p>
      Add a label to the field with the <code>label</code> property.
    </p>
    <Example
      Element={Label} code={LabelSrc}
      caption="name" expand
    />
    <Split>
      <p>
        Like all other field properties, they can be defined via <FormFieldsLink/>{' '}
        on the <FormLink/>.  If you explicitly set a <code>label</code> on the{' '}
        <FieldLink/> then it will take precedence.
      </p>
      <Suggest>
        Note how the first field has the <code>label</code> defined in the{' '}
        <FormFieldsLink/> but the second defines its own <code>label</code>{' '}
        which is used instead of the one defined in the <FormFieldsLink/>.
      </Suggest>
    </Split>

    <Example
      Element={FormFields} code={FormFieldsSrc}
      caption="Form fields" expand
    />
    <SeeAlso
      links={[
        'field:name',
        'form:fields',
      ]}
    />
  </div>


export default LabelExamples