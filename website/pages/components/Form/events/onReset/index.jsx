import React        from 'react'
import OnReset      from './examples/OnReset.jsx'
import OnResetSrc   from './examples/OnReset.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'

const OnResetExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onReset</code></h2>
    <p>
      The <code>onReset</code> property can be used to define a function
      that will be called when the form is reset.
    </p>
    <Example
      Element={OnReset}
      code={OnResetSrc}
      caption="onReset"
    />
    <SeeAlso
      links={[
        'form:onSubmit',
        'form:onSuccess',
        'form:onError',
      ]}
    />
  </div>


export default OnResetExamples