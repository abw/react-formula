import React            from 'react'
import Example          from '../../../../site/Example.jsx'
import ShowOptional     from './ShowOptional.jsx'
import ShowOptionalSrc  from './ShowOptional.jsx?raw'
import { FieldLink, FormLink, RequiredLink } from '../../../../site/Links.jsx'

const ShowOptionalExample = () =>
  <div>
    <h1>Optional Fields</h1>
    <p>
      This option applies to <FieldLink/> components that are <b>NOT</b>{' '}
      marked as <RequiredLink/>.
    </p>

    <h2><code>showOptional</code></h2>
    <p>
      If you set the <code>showOptional</code> property on either the{' '}
      <FormLink/> or <FieldLink/> then it will add an additional label to
      the optional fields as shown in the examples below.
    </p>
    <Example
      Element={ShowOptional} code={ShowOptionalSrc}
      caption="showOptional"
    />
  </div>

export default ShowOptionalExample