import React        from 'react'
import Example      from '../../../site/Example.jsx'
import Fieldset     from './examples/Fieldset.jsx'
import FieldsetSrc  from './examples/Fieldset.jsx?raw'
import FieldsetFields    from './examples/FieldsetFields.jsx'
import FieldsetFieldsSrc from './examples/FieldsetFields.jsx?raw'
import { FieldsLink } from '../../../site/Links.jsx'

const FieldsetExamples = () =>
  <div>
    <h1>Fieldset</h1>
    <p>
      The <code>Fieldset</code> component can be used to create a field
      set.  The <code>legend</code> property should be used to set the
      legend.
    </p>
    <Example
      Element={Fieldset} code={FieldsetSrc}
      caption="Fieldset"
    />
    <p>
      The <code className="code">fields</code> property can be used as
      a shortcut to render a set of named fields using the{' '}
      <FieldsLink/> component.
    </p>
    <Example
      Element={FieldsetFields} code={FieldsetFieldsSrc}
      caption="Fieldset fields"
    />
  </div>

export default FieldsetExamples