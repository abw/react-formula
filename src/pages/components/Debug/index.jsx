import React         from 'react'
import Example       from '../../../site/Example.jsx'
import DebugSrc      from './examples/Debug.jsx?raw'
import Debug         from './examples/Debug.jsx'
import ShowSrc       from './examples/Show.jsx?raw'
import Show          from './examples/Show.jsx'
import ShowAllSrc    from './examples/ShowAll.jsx?raw'
import ShowAll       from './examples/ShowAll.jsx'

const DebugExamples = () =>
  <div>
    <h1>Debug</h1>
    <p>
      The <code>Debug</code> component can be used in development to debug
      your form.  By default it displays only the form values.
    </p>

    <Example
      Element={Debug} code={DebugSrc}
      caption="Debug"
    >
      <p>
        Try updating the form values and see how the debugging data changes.
      </p>
    </Example>

    <h2>show</h2>
    <p>
      The <code>show</code> option can used to configure what data the
      debug panel displays.  It should be an object containing any of{' '}
      <code>values</code>, <code>config</code>, <code>status</code> or{' '}
      <code>fields</code> which should be set to <code>true</code> to enable
      display.
    </p>
    <Example
      Element={Show} code={ShowSrc}
      caption="show"
    />

    <h2>showAll</h2>
    <p>
      The <code>showAll</code> option is a short-cut to showing all form
      data.
    </p>

    <Example
      Element={ShowAll} code={ShowAllSrc}
      caption="showAll"
    />
  </div>


export default DebugExamples