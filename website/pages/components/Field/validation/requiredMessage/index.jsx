import React              from 'react'
import RequiredMessageSrc from './examples/RequiredMessage.jsx?raw'
import RequiredMessage    from './examples/RequiredMessage.jsx'
import Example            from '@/site/Example.jsx'
import SeeAlso            from '@/site/SeeAlso.jsx'
import Split              from '@/site/Split.jsx'
import Suggest            from '@/site/Suggest.jsx'
import { FieldLink, FormLink, RequiredLink } from '@/site/Links.jsx'

const RequiredMessageExample = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>requiredMessage</code></h2>
    <Split align="end">
      <div>
        <p>
          You can use the <code className="code">requiredMessage</code> property
          to change the error message that is generated for <RequiredLink/> fields
          that aren&apos;t completed.
        </p>
        <p>
          You can set it on individual <FieldLink/> components or on the parent{' '}
          <FormLink/> to act as the default for all fields.
        </p>
      </div>
      <Suggest>
        Try submitting the form without entering any values.  You should
        see the form-wide <code>requiredMessage</code> displayed for the
        first field, and the field-specific value for the second.
      </Suggest>
    </Split>
    <Example
      Element={RequiredMessage} code={RequiredMessageSrc}
      caption="requiredMessage" expand
    >
    </Example>

    <SeeAlso
      links={[
        'field:required',
        'field:showRequired',
        'field:requiredLabel',
        'field:validateOnChange',
        'field:validateOnBlur',
      ]}
    />

  </div>

export default RequiredMessageExample