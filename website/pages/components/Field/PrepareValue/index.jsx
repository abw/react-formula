import React              from 'react'
import Example            from '../../../../site/Example.jsx'
import PrepareValueSource from './PrepareValue.jsx?raw'
import PrepareValue       from './PrepareValue.jsx'
import { FieldLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'
import Split from '../../../../site/Split.jsx'
import Suggest from '../../../../site/Suggest.jsx'

const PrepareValueExamples = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>prepareValue</code></h2>
    <Split>
      <p>
        You can add a <code className="code">prepareValue</code> function to
        a <FieldLink/> to prepare the value before it&apos;s set.
      </p>
      <Suggest>
        Try entering some letters in the field below.  You should see that
        they get converted to upper case.
      </Suggest>
    </Split>
    <Example
      Element={PrepareValue} code={PrepareValueSource}
      caption="onChange" expand
    />
    <SeeAlso
      links={[
        'field:validate',
        'field:validateOnBlur',
        'field:validateOnChange',
      ]}
    />
  </div>


export default PrepareValueExamples