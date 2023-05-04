import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import OnBlur        from './OnBlur.jsx'
import OnBlurSrc     from './OnBlur.jsx?raw'
import { FieldLink } from '../../../../site/Links.jsx'

const OnBlurExamples = () =>
  <div>
    <h1>Focus and Blur</h1>

    <h2><code>onBlur</code></h2>
    <p>
      You can add an <code>onBlur</code> handler to a <FieldLink/>{' '}
      which will be called when the field is blurred (i.e. unselected).
      The field context will be passed as an argument.
    </p>
    <Example
      Element={OnBlur} code={OnBlurSrc}
      caption="onFocus"
    >
      <p>
        Focus on one of the fields below and then select the other field.
        Watch the Javascript console for messages indicating when a field
        is blurred.
      </p>
    </Example>
  </div>


export default OnBlurExamples