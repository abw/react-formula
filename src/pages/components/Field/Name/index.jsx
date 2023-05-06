import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import NameSrc       from './Name.jsx?raw'
import Name          from './Name.jsx'
import FormFieldsSrc from './FormFields.jsx?raw'
import FormFields    from './FormFields.jsx'
import SeeAlso       from '../../../../site/SeeAlso.jsx'
import { DebugLink, FieldLink, FormFieldsLink, FormLink, RequiredLink } from '../../../../site/Links.jsx'

const NameExamples = () =>
  <div>
    <h1>Field Properties</h1>

    <h2><code>name</code></h2>
    <p>
      The <code>name</code> is the only required property for a <FieldLink/>.
      It is used as the key to set the <FormLink/> value.
    </p>
    <Example
      Element={Name} code={NameSrc}
      caption="name"
    >
      <p>
        Enter some text in the input field.  The <DebugLink/> component is
        included in this example to show the form data as it&apos;s being
        set.  Click on the &quot;Submit&quot; button and you&apos;ll see
        an alert showing the data that would be submitted.
      </p>
    </Example>

    <p>
      You can set the <FormFieldsLink/> property on the <FormLink/> as an
      object containing additional properties for each field.  The{' '}
      <code>name</code> is used as the key to fetch those properties.
      Any properties explicitly set on the <FieldLink/> will override them.
    </p>

    <Example
      Element={FormFields} code={FormFieldsSrc}
      caption="Form fields"
    >
      <p>
        Note how the <FieldLink/> has now got a <code>label</code> and the{' '}
        <RequiredLink/> property is set.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:label',
        'form:fields',
      ]}
    />
  </div>


export default NameExamples