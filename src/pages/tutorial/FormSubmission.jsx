import React from 'react'
import Example from '../../site/Example.jsx'
import PrevNext from '../../site/PrevNext.jsx'
import DummySubmit    from './examples/DummySubmit.jsx'
import DummySubmitSrc from './examples/DummySubmit.jsx?raw'
import { FormLink } from '../../site/Links.jsx'

const FormSubmission = () =>
  <div>
    <h1>Form Submission</h1>
    <p className="intro">
      To handle submission of a form we need to add an <code>onSubmit</code>{' '}
      handler to the <FormLink/> component.
      In most cases this will be
      making a call to a back-end API but to demonstrate the basic principle
      let&apos;s start with something simpler.
    </p>
    <h2>onSubmit Handler</h2>
    <p>
      We&apos;ll create a function
      which stores the submitted <code>values</code> in a state variable and
      displays them on the screen
    </p>
    <Example
      Element={DummySubmit} code={DummySubmitSrc}
      caption="Dummy Submission"
    >
      <p>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button.  You should see the submitted values
        appear in a debugging window beneath the form.
      </p>
    </Example>
    <PrevNext
      prevLink="/tutorial/simple-form"         prevText="Defining a Form"
      nextLink="/tutorial/submission-response" nextText="Submission Response"
    />
  </div>

export default FormSubmission