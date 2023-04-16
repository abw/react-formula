import React          from 'react'
import Example        from '../../../site/Example.jsx'
import OnChangeSource from './examples/OnChange.jsx?raw'
import OnChange       from './examples/OnChange.jsx'

const OnChangeExamples = () =>
  <div>
    <h1>onChange</h1>

    <Example
      Element={OnChange} code={OnChangeSource}
      caption="onChange"
    >
      <p>
        You can add an <code>onChange</code> handler to a <code>Field</code>{' '}
        which will be called when the field value is changed.  The field context
        will be passed as an argument.
      </p>
    </Example>

  </div>


export default OnChangeExamples