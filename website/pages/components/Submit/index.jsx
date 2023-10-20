import React          from 'react'
import Submit         from './examples/Submit.jsx'
import SubmitSrc      from './examples/Submit.jsx?raw'
import SubmitProps    from './examples/SubmitProperties.jsx'
import SubmitPropsSrc from './examples/SubmitProperties.jsx?raw'
import OnSubmitSrc    from './examples/OnSubmit.jsx?raw'
import OnSubmit       from './examples/OnSubmit.jsx'
import OnClickSrc     from './examples/OnClick.jsx?raw'
import OnClick        from './examples/OnClick.jsx'
import Example        from '@/site/Example.jsx'
import Link           from '@/site/Link.jsx'
import { ErrorsLink, FormOnSubmitLink } from '@/site/Links.jsx'
import Split from '@/website/site/Split.jsx'
import Suggest from '@/website/site/Suggest.jsx'

const SubmitExamples = () =>
  <div className="prose">
    <h1>Submit</h1>
    <Split>
      <p>
        The <code>Submit</code> component can be used to add a button
        which will submit the form.  See the{' '}
        <Link to="/components/form/validation" text="validation page"/> for information
        on how the form data is validated and the{' '}
        <ErrorsLink/> component for details on how validation errors are
        displayed and can be customised.
      </p>
      <Suggest>
        Try entering some text in the fields below then click on the Submit
        button.
      </Suggest>
    </Split>
    <Example
      Element={Submit} code={SubmitSrc}
      caption="Submit" expand
    />

    <h2><code>text</code></h2>
    <p>
      You can use the <code>text</code> property to change the text that&apos;s
      displayed on the button and add a custom CSS class using <code>className</code>.
    </p>
    <Example
      Element={SubmitProps} code={SubmitPropsSrc}
      caption="Properties" expand
    />

    <h2><code>onClick</code></h2>
    <p>
      You can use the <code>onClick</code> property to handle a click on
      the button.  You will need to call <code>preventDefault()</code> on the
      event if you want to stop the form from being submitted.
    </p>
    <Example
      Element={OnClick} code={OnClickSrc}
      caption="onClick" expand
    />

    <h2><code>onSubmit</code></h2>
    <p>
      The default behaviour for the button is to submit the form.
      You can use the <FormOnSubmitLink/> form property to handle the
      submission.
    </p>
    <Example
      Element={OnSubmit} code={OnSubmitSrc}
      caption="onSubmit" expand
    />
  </div>

export default SubmitExamples