import React               from 'react'
import Example             from '../../../site/Example.jsx'
import SubmitSource        from './examples/Submit.jsx?raw'
import SubmitExample       from './examples/Submit.jsx'
import SubmitPropsSource   from './examples/SubmitProps.jsx?raw'
import SubmitPropsExample  from './examples/SubmitProps.jsx'
import OnSubmitSource      from './examples/OnSubmit.jsx?raw'
import OnSubmitExample     from './examples/OnSubmit.jsx'

const Submit = () =>
  <div>
    <h1>Form Submission</h1>
    <Example
      Element={SubmitExample} code={SubmitSource}
      caption="Submit"
    >
      <p>
        Add the <code>Submit</code> component for a submit button.
      </p>
    </Example>

    <Example
      Element={SubmitPropsExample} code={SubmitPropsSource}
      caption="Submit Props"
    >
      <p>
        Use the <code>text</code> property to set the button text, and{' '}
        <code>className</code> to set a CSS class.
      </p>
    </Example>

    <Example
      Element={OnSubmitExample} code={OnSubmitSource}
      caption="onSubmit"
    >
      <p>
        Use the <code>onSubmit</code> property on the <code>Form</code> to
        define a function to handle the form submission.
      </p>
    </Example>

    <h2>TODO</h2>
    <ul>
      <li>Submit button</li>
      <li>Using the Changed component to only show submit when form is changed</li>
      <li>Validation on submit</li>
      <li>Validation on field blur (tells us if it&apos;s safe to submit)</li>
    </ul>
  </div>

export default Submit