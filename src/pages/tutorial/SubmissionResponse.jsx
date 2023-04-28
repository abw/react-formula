import React from 'react'
import Example from '../../site/Example.jsx'
import PrevNext from '../../site/PrevNext.jsx'
import SubmitResponse    from './examples/SubmitResponse.jsx'
import SubmitResponseSrc from './examples/SubmitResponse.jsx?raw'

const SubmissionResponse = () =>
  <div>
    <h1>Submission Response</h1>
    <p className="intro">
      We now need to think about what happens in the real world where a form
      submission results in a call to a back-end API.  There are, broadly
      speaking, two possible outcomes: the call is successful, or it fails
      for some reason.
    </p>

    <h2>Successful Response</h2>
    <p>
      Let&apos;s start by looking at the case there the submission is
      successful.  In this example we define an <code>onSubmit</code> function
      which returns a resolved promise.  This is emulating how both{' '}
      <a href="https://axios-http.com/">Axios</a> and the native{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a>{' '}
      API work.
    </p>
    <p>
      The additional step is to defined an <code>onSuccess</code> handler
      which can do something to handle the successful response.  In this
      case we&apos;re calling the <code>setValues</code> function to store
      the response data, much like in the previous example, except that this
      time we&apos;re emulating the full request and response cycle.
    </p>
    <Example
      Element={SubmitResponse} code={SubmitResponseSrc}
      caption="Submission Response"
    >
      <p>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button.  You should see the values returned by
        an emulated server response appear in a debugging window beneath the
        form.
      </p>
    </Example>

    <PrevNext
      prevLink="/tutorial/form-submission" prevText="Form Submission"
      nextLink="/tutorial/submission-errors" nextText="Submission Errors"
    />
  </div>

export default SubmissionResponse