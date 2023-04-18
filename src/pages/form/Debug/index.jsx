import React         from 'react'
import Example       from '../../../site/Example.jsx'
import DebugSrc      from './examples/Debug.jsx?raw'
import Debug         from './examples/Debug.jsx'

const DebugExamples = () =>
  <div>
    <h1>Debug</h1>
    <p>
      The <code>Debug</code> component can be used in development to debug
      your form.  By default it displays the form values.  You can enable or
      disable this explicitly with the <code>showValues</code> property.  You
      can also set the <code>showForm</code> property to enable display of
      the form data.
    </p>

    <Example
      Element={Debug} code={DebugSrc}
      caption="Debug"
    >
      <p>
        Try updating the form values and see how the debugging data changes.
      </p>
    </Example>
  </div>


export default DebugExamples