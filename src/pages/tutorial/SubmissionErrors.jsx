import React from 'react'
import Example from '../../site/Example.jsx'
import PrevNext from '../../site/PrevNext.jsx'
import SubmitThrow       from './examples/SubmitThrow.jsx'
import SubmitThrowSrc    from './examples/SubmitThrow.jsx?raw'
import SubmitReject      from './examples/SubmitReject.jsx'
import SubmitRejectSrc   from './examples/SubmitReject.jsx?raw'
import { ErrorsLink }    from '../../site/Links.jsx'
// import { FormLink } from '../../site/Links.jsx'

const SubmissionErrors = () =>
  <div>
    <h1>Submission Errors</h1>
    <p className="intro">
      For a good user experience we should use client-side validation to
      try and catch all data entry errors <i>before</i> they get submitted.
      However, it&apos;s not always possible to do that.  It may be the
      case that validating a field requires access to the database and is
      best handled on the server.  Or perhaps a field should be validated
      server-side for security reasons (e.g. validating a Captcha).  Or
      an API request could fail or otherwise be rejected for any number of
      other reasons.  So we must know how to handle these cases.
    </p>
    <h2>Failed Response</h2>
    <p>
      If a submission throws an error or returns an error via a rejected
      Promise then the form submission handler will set the internal{' '}
      <code>error</code> state variable. By default this error will be
      displayed in the form header.  See the <ErrorsLink/> component for
      more information about changing how and if errors are displayed.
    </p>
    <p>
      You can provide an <code>onError</code> handler which will be called
      with the error if you want to do any further processing.  In this
      example we simply call a <code>setError()</code> function to store
      the error in a React state variable and then display it beneath the
      form.
    </p>
    <Example
      Element={SubmitThrow} code={SubmitThrowSrc}
      caption="Error Thrown"
    >
      <p>
        Try submitting this form to see what happens when an error is thrown.
        You should see the error displayed in the form header and also in a
        debugging window beneath the form.
      </p>
    </Example>

    <h2>Rejected Promise</h2>
    <p>
      In most cases a failed submission should return a rejected Promise.
      The data returned should be an objecting containing either a single
      <code>error</code> string (or object containing a <code>message</code>),
      or an array of <code>errors</code>.  Each element in the array can be
      an error string, but the more usual (and useful) case is for each
      element to be an object containing the error <code>message</code>.
    </p>
    <p>
      The benefit of this approach is that error objects can also contain
      the <code>name</code> of the field that it relates to.  The
      corresponding field will be marked as invalid and have the error
      message set so that it can be displayed under the input.  Furthermore,
      the field label is copied into the error element so that it can be
      displayed in the error panel at the start of the form.
    </p>
    <p>
      This would be the typical way to handle a request that failed due to
      server-side validation errors.
    </p>
    <Example
      Element={SubmitReject} code={SubmitRejectSrc}
      caption="Error Thrown"
    >
      <p>
        Try submitting the form to see the errors generated.
      </p>
    </Example>

    <PrevNext
      prevLink="/tutorial/submission-response" prevText="Submission Response"
      nextLink="/tutorial/form-validation" nextText="Form Validation..."
    />
  </div>

export default SubmissionErrors