import React      from 'react'
import Example, { prepareCode }    from '../../../../site/Example.jsx'
import Fields     from './Fields.jsx'
import FieldsSrc  from './Fields.jsx?raw'
import InlineSrc  from './Inline.jsx?raw'
import SeeAlso    from '../../../../site/SeeAlso.jsx'
import { FieldLink, NameLink } from '../../../../site/Links.jsx'
import CodeBlock from '../../../../site/CodeBlock.jsx'

const FieldsExamples = () =>
  <div>
    <h1>Form Properties</h1>
    <h2><code>fields</code></h2>
    <p>
      The <code>fields</code> property allows you to define properties
      for form fields externally.  The <FieldLink/> <NameLink/> property
      is used to associate a field to its definition.
    </p>
    <Example
      Element={Fields} code={FieldsSrc}
      caption="fields" expand
    />
    <p>
      This is the same as defining the properties on the <FieldLink/> components.
    </p>
    <CodeBlock
      code={prepareCode(InlineSrc)}
      caption="Inline Field"
      expand
    />
    <p>
      The <code>fields</code> definition can contain any number of fields,
      including those that aren&apos;t used by any particular form.  Only
      the fields that are referenced by a <FieldLink/> component will be
      considered part of the form.
    </p>
    <p>
      Although it requires a little more work to define fields externally, there
      are a number of benefits.  The first is that you&apos;re separating the
      field definition from the presentational markup.  When a form gets
      more complex it&apos;s usually easier to have them separated,
      particularly if you have more complicated validation functions attached
      to the fields.
    </p>
    <p>
      Another benefit is that you can share field definitions
      across multiple forms.  For example, you might want to define a single
      set of field definitions for all forms relating to user authentication:
      login, registration, password reset, and so on.  The <code>email</code>{' '}
      field will be the same for each, so it makes sense to define it in one
      place.
    </p>
    <SeeAlso
      links={[
      ]}
    />
  </div>


export default FieldsExamples