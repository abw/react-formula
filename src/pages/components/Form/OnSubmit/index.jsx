import React       from 'react'
import Example     from '../../../../site/Example.jsx'
import OnSubmit    from './OnSubmit.jsx'
import OnSubmitSrc from './OnSubmit.jsx?raw'
import SeeAlso     from '../../../../site/SeeAlso.jsx'

const OnSubmitExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onSubmit</code></h2>
    <p>
      TODO
    </p>
    <Example
      Element={OnSubmit} code={OnSubmitSrc}
      caption="onSubmit"
    >
      <p>
        TODO
      </p>
    </Example>
    <SeeAlso
      links={[
        'form:onSuccess',
        'form:onError',
      ]}
    />
  </div>


export default OnSubmitExamples