import React      from 'react'
import Example    from '../../../site/Example.jsx'
import Changed    from './Changed.jsx'
import ChangedSrc from './Changed.jsx?raw'

const ChangedExamples = () =>
  <div>
    <h1>Changed</h1>
    <p>
      The <code>Changed</code> component will only render its child components
      when the form state has changed.
    </p>
    <p>
      A typical example is shown below.  The &quot;Reset&quot; and
      &quot;Submit&quot; buttons are only displayed once the user has
      made changes to a form field.
    </p>
    <Example
      Element={Changed} code={ChangedSrc}
      caption="Changed"
    >
      <p>
        Edit one of the fields in the form and you should see the{' '}
        &quot;Reset&quot; and &quot;Submit&quot; buttons appear as if by
        magic.  Try clicking on the &quot;Reset&quot; button and they will
        be hidden again.
      </p>
    </Example>
  </div>

export default ChangedExamples