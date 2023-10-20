import React      from 'react'
import Example    from '../../../site/Example.jsx'
import Changed    from './Changed.jsx'
import ChangedSrc from './Changed.jsx?raw'
import Split from '@/website/site/Split.jsx'
import Suggest from '@/website/site/Suggest.jsx'

const ChangedExamples = () =>
  <div className="prose">
    <h1>Changed</h1>
    <Split>
      <div>
        <p>
          The <code>Changed</code> component will only render its child components
          when the form state has changed.
        </p>
        <p>
          A typical example is shown below.  The &quot;Reset&quot; and
          &quot;Submit&quot; buttons are only displayed once the user has
          made changes to a form field.
        </p>
      </div>
      <Suggest>
        Edit one of the fields in the form and you should see the{' '}
        &quot;Reset&quot; and &quot;Submit&quot; buttons appear as if by
        magic.  Try clicking on the &quot;Reset&quot; button and they will
        be hidden again.
      </Suggest>
    </Split>
    <Example
      Element={Changed} code={ChangedSrc}
      caption="Changed" expand
    >
    </Example>
  </div>

export default ChangedExamples