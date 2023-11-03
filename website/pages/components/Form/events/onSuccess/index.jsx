import React        from 'react'
import OnSuccess    from './examples/OnSuccess.jsx'
import OnSuccessSrc from './examples/OnSuccess.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'

const OnSuccessExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onSuccess</code></h2>
    <p>
      The <code>onSuccess</code> property can be used to define a function
      that will be called in the event of a successful submission of the
      form.
    </p>
    <Example
      Element={OnSuccess}
      code={OnSuccessSrc}
      caption="onSuccess"
    />
    <SeeAlso
      links={[
        'form:onSubmit',
        'form:onError',
      ]}
    />
  </div>


export default OnSuccessExamples