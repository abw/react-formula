import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import OptionalLabelSrc  from './OptionalLabel.jsx?raw'
import OptionalLabel     from './OptionalLabel.jsx'
import { FieldLink, FormLink, RequiredLink, ShowOptionalLink } from '../../../../site/Links.jsx'

const OptionalLabelExample = () =>
  <div>
    <h1>Optional Fields</h1>
    <p>
      This option applies to <FieldLink/> components that are <b>NOT</b>{' '}
      marked as <RequiredLink/>.
    </p>

    <h2><code>optionalLabel</code></h2>
    <p>
      You can use the <code className="code">optionalLabel</code> property
      to change the label that is display for optional fields that have the{' '}
      <ShowOptionalLink/> option set.  You can set it on individual{' '}
      <FieldLink/> components or on the parent <FormLink/>.
    </p>
    <Example
      Element={OptionalLabel} code={OptionalLabelSrc}
      caption="optionalLabel"
    />
  </div>

export default OptionalLabelExample