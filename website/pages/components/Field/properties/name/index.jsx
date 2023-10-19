import React         from 'react'
import NameSrc       from './examples/Name.jsx?raw'
import Name          from './examples/Name.jsx'
import FormFieldsSrc from './examples/FormFields.jsx?raw'
import FormFields    from './examples/FormFields.jsx'
import Example       from '@/site/Example.jsx'
import SeeAlso       from '@/site/SeeAlso.jsx'
import Split         from '@/site/Split.jsx'
import Suggest       from '@/site/Suggest.jsx'
import {
  DebugLink, FieldLink, FormFieldsLink, FormLink, RequiredLink
} from '@/site/Links.jsx'

const NameExamples = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>name</code></h2>
    <Split>
      <p>
        The <code>name</code> is the only required property for a <FieldLink/>.
        It is used as the key to set the <FormLink/> value.
      </p>
      <Suggest>
        Enter some text in the input field.  The <DebugLink/> component is
        included in this example to show the form data as it&apos;s being
        set.  Click on the &quot;Submit&quot; button and you&apos;ll see
        an alert showing the data that would be submitted.
      </Suggest>
    </Split>
    <Example
      Element={Name} code={NameSrc}
      caption="name" expand
    />

    <Split>
      <p>
        You can set the <FormFieldsLink/> property on the <FormLink/> as an
        object containing additional properties for each field.  The{' '}
        <code>name</code> is used as the key to fetch those properties.
        Any properties explicitly set on the <FieldLink/> will override them.
      </p>
      <Suggest>
        Note how the <FieldLink/> has now got a <code>label</code> and the{' '}
        <RequiredLink/> property is set.
      </Suggest>
    </Split>
    <Example
      Element={FormFields} code={FormFieldsSrc}
      caption="Form fields" expand
    />
    <SeeAlso
      links={[
        'field:label',
        'form:fields',
      ]}
    />
  </div>


export default NameExamples