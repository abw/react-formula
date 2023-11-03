import React       from 'react'
import OnSubmit    from './examples/OnSubmit.jsx'
import OnSubmitSrc from './examples/OnSubmit.jsx?raw'
import Example     from '@/site/Example.jsx'
import SeeAlso     from '@/site/SeeAlso.jsx'

const OnSubmitExamples = () =>
  <div>
    <h1>Form Events</h1>
    <h2><code>onSubmit</code></h2>
    <p>
      The <code>onSubmit</code> property can be used to define a function
      that will be called when the form is submitted and has passed all the
      relevant validation checks.
    </p>
    <p>
      In most cases this function will be making an API call to submit the
      form data.  The form values are passed to the function as the first
      argument.  The second argument is an object containing the form
      context in case you need it.
    </p>
    <Example
      Element={OnSubmit}
      code={OnSubmitSrc}
      caption="onSubmit"
    />
    <SeeAlso
      links={[
        'form:onSuccess',
        'form:onError',
      ]}
    />
  </div>


export default OnSubmitExamples