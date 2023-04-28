import React from 'react'
import Example from '../../site/Example.jsx'
import DummySubmit    from './examples/DummySubmit.jsx'
import DummySubmitSrc from './examples/DummySubmit.jsx?raw'
import { FormLink } from '../../site/Links.jsx'
import { TutorialPager } from '../../site/Tutorial.jsx'

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
    <h2><code>onSubmit</code> Handler</h2>
    <p>
      We&apos;ll create a function which stores the submitted{' '}
      <code>values</code> in a state variable and displays them on the
      screen.  The <code>onSubmit</code> handler is passed an object
      containing the validated form values.  It should return a Promise which
      resolves on success.  If an error occurs then the Promise should reject,
      returning an object containing either an <code>error</code> and/or an
      array of <code>errors</code>.  These are handled the same as for
      client-side form validation.
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
    <TutorialPager uri="form-submission"/>
  </div>

export default FormSubmission