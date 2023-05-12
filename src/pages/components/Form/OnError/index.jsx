import React      from 'react'
import Example    from '../../../../site/Example.jsx'
import OnError    from './OnError.jsx'
import OnErrorSrc from './OnError.jsx?raw'
import SeeAlso    from '../../../../site/SeeAlso.jsx'

const OnErrorExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onError</code></h2>
    <p>
      TODO
    </p>
    <Example
      Element={OnError} code={OnErrorSrc}
      caption="onError"
    >
      <p>
        TODO
      </p>
    </Example>
    <SeeAlso
      links={[
        'form:onSubmit',
        'form:onError',
      ]}
    />
  </div>


export default OnErrorExamples