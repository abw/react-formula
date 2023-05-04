import React              from 'react'
import Example            from '../../../../site/Example.jsx'
import PrepareValueSource from './PrepareValue.jsx?raw'
import PrepareValue       from './PrepareValue.jsx'
import { FieldLink } from '../../../../site/Links.jsx'

const PrepareValueExamples = () =>
  <div>
    <h1>Field Value</h1>
    <h2><code>prepareValue</code></h2>

    <p>
      You can add a <code className="code">prepareValue</code> function to
      a <FieldLink/> to prepare the value before it&apos;s set.
    </p>
    <Example
      Element={PrepareValue} code={PrepareValueSource}
      caption="onChange"
    >
      <p>
        Try entering some letters in the field below.  You should see that
        they get converted to upper case.
      </p>
    </Example>

  </div>


export default PrepareValueExamples