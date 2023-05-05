import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import RequiredMessageSrc from './RequiredMessage.jsx?raw'
import RequiredMessage    from './RequiredMessage.jsx'
import { FieldLink, FormLink, RequiredLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const RequiredMessageExample = () =>
  <div>
    <h1>Field Validation</h1>
    <h2><code>requiredMessage</code></h2>
    <p>
      You can use the <code className="code">requiredMessage</code> property
      to change the error message that is generated for <RequiredLink/> fields
      that aren&apos;t completed.
    </p>
    <p>
      You can set it on individual <FieldLink/> components or on the parent{' '}
      <FormLink/> to act as the default for all fields.
    </p>
    <Example
      Element={RequiredMessage} code={RequiredMessageSrc}
      caption="requiredMessage"
    >
      <p>
        Try submitting the form without entering any values.
      </p>
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