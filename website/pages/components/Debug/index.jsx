import React         from 'react'
import Example       from '../../../site/Example.jsx'
import DebugSrc      from './examples/Debug.jsx?raw'
import Debug         from './examples/Debug.jsx'
import Status    from './examples/Status.jsx'
import StatusSrc from './examples/Status.jsx?raw'
import AllSrc    from './examples/All.jsx?raw'
import All       from './examples/All.jsx'
import Split from '../../../site/Split.jsx'
import Suggest from '@/website/site/Suggest.jsx'

const DebugExamples = () =>
  <div className="prose">
    <h1>Debug</h1>
    <Split align="end">
      <p>
        The <code>Debug</code> component can be used in development to debug
        your form.  By default it displays only the form values.
      </p>
      <Suggest>
        Try updating the form values and see how the debugging data changes.
      </Suggest>
    </Split>
    <Example
      Element={Debug} code={DebugSrc}
      caption="Debug"
    />

    <h2><code>values</code> and <code>status</code></h2>
    <p>
      The <code>status</code> option can be set to view the form status.
      The <code>values</code> option defaults to <code>true</code> but
      you can set it to <code>false</code> if you don&apos;t want to
      view the current form values.
    </p>
    <Example
      Element={Status} code={StatusSrc}
      caption="Status and Fields"
    />

    <h2><code>all</code></h2>
    <p>
      The <code>all</code> option is a shortcut to show all form
      data.
    </p>

    <Example
      Element={All} code={AllSrc}
      caption="All Data" expand
    />
  </div>


export default DebugExamples