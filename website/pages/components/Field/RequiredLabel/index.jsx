import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import RequiredLabelSrc from './RequiredLabel.jsx?raw'
import RequiredLabel    from './RequiredLabel.jsx'
import { FieldLink, FormLink, RequiredLink, ShowRequiredLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const RequiredLabelExample = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>requiredLabel</code></h2>
    <p>
      You can use the <code className="code">requiredLabel</code> property
      to change the label that is displayed for <RequiredLink/> fields that
      have the <ShowRequiredLink/> option enabled.  You can set it on
      individual <FieldLink/> components or on the parent <FormLink/>.
    </p>
    <Example
      Element={RequiredLabel} code={RequiredLabelSrc}
      caption="requiredLabel" expand
    />

    <SeeAlso
      links={[
        'field:required',
        'field:showRequired',
        'field:showOptional',
        'field:optionalLabel',
      ]}
    />
  </div>

export default RequiredLabelExample