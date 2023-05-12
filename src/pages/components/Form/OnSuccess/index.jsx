import React        from 'react'
import Example      from '../../../../site/Example.jsx'
import OnSuccess    from './OnSuccess.jsx'
import OnSuccessSrc from './OnSuccess.jsx?raw'
import SeeAlso      from '../../../../site/SeeAlso.jsx'

const OnSuccessExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onSuccess</code></h2>
    <p>
      TODO
    </p>
    <Example
      Element={OnSuccess} code={OnSuccessSrc}
      caption="onSuccess"
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


export default OnSuccessExamples