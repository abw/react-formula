import React          from 'react'
import OnFocus        from './examples/OnFocus.jsx'
import OnFocusSrc     from './examples/OnFocus.jsx?raw'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Suggest        from '@/site/Suggest.jsx'
import Split          from '@/site/Split.jsx'
import { FieldLink }  from '@/site/Links.jsx'

const OnFocusExamples = () =>
  <div className="prose">
    <h1>Field Events</h1>

    <h2><code>onFocus</code></h2>
    <Split>
      <p>
        You can add an <code>onFocus</code> handler to a <FieldLink/>{' '}
        which will be called when the field is focussed (i.e. selected).
        The field context will be passed as an argument.
      </p>
      <Suggest>
        Focus on each of the fields below.  A message should be displayed
        each time a field gains focus.
      </Suggest>
    </Split>
    <Example
      Element={OnFocus} code={OnFocusSrc}
      caption="onFocus" expand
    />

    <SeeAlso
      links={[
        'field:onBlur',
        'field:onChange',
        'field:onValid',
        'field:onInvalid',
      ]}
    />
  </div>


export default OnFocusExamples