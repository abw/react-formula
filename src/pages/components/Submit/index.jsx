import React          from 'react'
import Example        from '../../../site/Example.jsx'
import Submit         from './examples/Submit.jsx'
import SubmitSrc      from './examples/Submit.jsx?raw'
import SubmitProps    from './examples/SubmitProperties.jsx'
import SubmitPropsSrc from './examples/SubmitProperties.jsx?raw'
import OnSubmitSrc    from './examples/OnSubmit.jsx?raw'
import OnSubmit       from './examples/OnSubmit.jsx'
import Link from '../../../site/Link.jsx'

const SubmitExamples = () =>
  <div>
    <h1>Submit</h1>
    <p>
      The <code>Submit</code> component can be used to add a button
      which will submit the form.  See the{' '}
      <Link to="/form/validation" text="validation page"/> for information
      on how the form data is validated and the{' '}
      <Link to="/form/errors" text="errors page"/> for how validation errors
      are displayed.
    </p>
    <Example
      Element={Submit} code={SubmitSrc}
      caption="Submit"
    >
      <p>
        Try entering some text in the fields below then click on the Submit
        button.
      </p>
    </Example>

    <h2>Properties</h2>
    <p>
      You can use the <code>text</code> property to change the text that&apos;s
      displayed on the button and add a custom CSS class using <code>className</code>.
    </p>
    <Example
      Element={SubmitProps} code={SubmitPropsSrc}
      caption="Properties"
    />

    <h2>onSubmit</h2>
    <p>
      You can use the <code>onSubmit</code> form property to handle the
      submission.
    </p>
    <Example
      Element={OnSubmit} code={OnSubmitSrc}
      caption="onSubmit"
    />
  </div>

export default SubmitExamples