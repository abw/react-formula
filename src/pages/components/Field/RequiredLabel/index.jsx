import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import RequiredLabelSrc from './RequiredLabel.jsx?raw'
import RequiredLabel    from './RequiredLabel.jsx'
import { FieldLink, FormLink, RequiredLink, ShowRequiredLink } from '../../../../site/Links.jsx'

const RequiredLabelExample = () =>
  <div>
    <h1>Required Fields</h1>
    <p>
      This option applies to <FieldLink/> components that are marked as{' '}
      <RequiredLink/>.
    </p>

    <h2><code>requiredLabel</code></h2>
    <p>
      You can use the <code className="code">requiredLabel</code> property
      to change the label that is displayed for <RequiredLink/> fields that
      have the <ShowRequiredLink/> option enabled.  You can set it on
      individual <FieldLink/> components or on the parent <FormLink/>.
    </p>
    <Example
      Element={RequiredLabel} code={RequiredLabelSrc}
      caption="requiredLabel"
    />

  </div>

export default RequiredLabelExample