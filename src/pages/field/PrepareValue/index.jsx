import React          from 'react'
import Example        from '../../../site/Example.jsx'
import PrepareValueSource from './examples/PrepareValue.jsx?raw'
import PrepareValue       from './examples/PrepareValue.jsx'

const PrepareValueExamples = () =>
  <div>
    <h1>onChange</h1>

    <Example
      Element={PrepareValue} code={PrepareValueSource}
      caption="onChange"
    >
      <p>
        You can add a <code className="code">prepareValue</code> function to
        a field to prepare the value before it&apos;s set.
      </p>
    </Example>

  </div>


export default PrepareValueExamples