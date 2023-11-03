import React      from 'react'
import OnError    from './examples/OnError.jsx'
import OnErrorSrc from './examples/OnError.jsx?raw'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'

const OnErrorExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onError</code></h2>
    <p>
      The <code>onError</code> property can be used to define a function
      that will be called in the event of a failed submission of the
      form.
    </p>
    <Example
      Element={OnError}
      code={OnErrorSrc}
      caption="onError"
    />
    <SeeAlso
      links={[
        'form:onSubmit',
        'form:onSuccess',
      ]}
    />
  </div>


export default OnErrorExamples