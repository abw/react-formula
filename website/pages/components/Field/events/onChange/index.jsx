import React          from 'react'
import OnChangeSource from './examples/OnChange.jsx?raw'
import OnChange       from './examples/OnChange.jsx'
import Example        from '@/site/Example.jsx'
import { FieldLink }  from '@/site/Links.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'

const OnChangeExamples = () =>
  <div className="prose">
    <h1>Field Events</h1>
    <h2><code>onChange</code></h2>

    <Split>
      <p>
        You can add an <code>onChange</code> handler to a <FieldLink/>{' '}
        which will be called when the field value is changed.  The field context
        will be passed as an argument.
      </p>
      <Suggest>
        Try entering some text in the field below.  You should see the
        &quot;Current value&quot; display update to reflect the field
        content.
      </Suggest>
    </Split>
    <Example
      Element={OnChange} code={OnChangeSource}
      caption="onChange" expand
    />

    <SeeAlso
      links={[
        'field:validateOnChange',
        'field:onBlur',
        'field:onFocus',
        'field:onValid',
        'field:onInvalid',
      ]}
    />
  </div>


export default OnChangeExamples