import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import OnFocus       from './OnFocus.jsx'
import OnFocusSrc    from './OnFocus.jsx?raw'
import { FieldLink } from '../../../../site/Links.jsx'

const OnFocusExamples = () =>
  <div>
    <h1>Focus and Blur</h1>

    <h2><code>onFocus</code></h2>
    <p>
      You can add an <code>onFocus</code> handler to a <FieldLink/>{' '}
      which will be called when the field is focussed (i.e. selected).
      The field context will be passed as an argument.
    </p>
    <Example
      Element={OnFocus} code={OnFocusSrc}
      caption="onFocus"
    >
      <p>
        Focus on the field below and watch the Javascript console for a
        message.
      </p>
    </Example>
  </div>


export default OnFocusExamples