import React      from 'react'
import Example    from '../../../../site/Example.jsx'
import Hidden     from './Hidden.jsx'
import HiddenSrc  from './Hidden.jsx?raw'
import SeeAlso    from '../../../../site/SeeAlso.jsx'

const HiddenExamples = () =>
  <div>
    <h1>Form Properties</h1>
    <h2><code>hidden</code></h2>
    <p>
      The <code>hidden</code> property can be used to define hidden values
      for the form.  This is typically used to include identifiers when editing
      existing data records.
    </p>
    <p>
      Any <code>hidden</code> fields and their values will be included in the
      submitted data.
    </p>
    <Example
      Element={Hidden} code={HiddenSrc}
      caption="hidden" expand
    />
    <SeeAlso
      links={[
        'form:values'
      ]}
    />
  </div>


export default HiddenExamples