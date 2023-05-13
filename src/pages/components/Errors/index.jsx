import React          from 'react'
import Example        from '../../../site/Example.jsx'
import Required       from './examples/Required.jsx'
import RequiredSrc    from './examples/Required.jsx?raw'
import ShowErrors     from './examples/ShowErrors.jsx'
import ShowErrorsSrc  from './examples/ShowErrors.jsx?raw'
import Error          from './examples/Error.jsx'
import ErrorSrc       from './examples/Error.jsx?raw'
import Errors         from './examples/Errors.jsx'
import ErrorsSrc      from './examples/Errors.jsx?raw'
import { FormLink } from '../../../site/Links.jsx'

const ErrorsExamples = () =>
  <div>
    <h1>Errors</h1>
    <p>
      By default, validation errors will be displayed in the form header.
    </p>
    <Example
      Element={Required} code={RequiredSrc}
      caption="Required Fields" expand
    >
      <p>
        Try submitting the form below without entering anything for either
        of the first two fields.
      </p>
    </Example>

    <h2>errorsInHeader</h2>
    <p>
      If you don&apos;t want errors displayed in the header you can set the{' '}
      <code>errorsInHeader</code> form property to <code>false</code>.  You
      can use the <code>Errors</code> component to display them somewhere
      else inside the form.
    </p>
    <Example
      Element={ShowErrors} code={ShowErrorsSrc}
      caption="Errors" expand
    />

    <h2>error</h2>
    <p>
      The <FormLink/> context can include a single <code>error</code> or
      an array of <code>errors</code>.  The first case is typically used when
      there&apos;s an error that doesn&apos;t relate to a specific field,
      e.g. &quot;Invalid username or password&quot;.  The latter case is
      used when there are multiple errors, e.g. for different fields.
    </p>
    <p>
      Just to complicate matters, both <code>error</code> and the elements
      in <code>errors</code> can be either strings or objects containing a{' '}
      <code>message</code> and other information about what field the error
      message relates to, including the field <code>name</code> and{' '}
      <code>label</code>.
    </p>
    <p>
      The <code>Errors</code> component handles all these cases.  There are
      also some additional properties that you can set on the <FormLink/> to
      configure what gets displayed.  The <code>errorsTitle</code> can be
      defined as a function which takes the number of errors and returns an
      appropriate title.  The default function returns &quot;Form Submission
      Error&quot; if there is one error or &quot;Form Submission Errors&quot;
      if there are more than one.  The <code>errorsPrompt</code> can also
      be defined to prompt the user to fix any <code>errors</code>.  This
      also takes the number of <code>errors</code>.  The default function
      returns &quot;Please correct this problem and re-submit:&quot; or
      &quot;Please correct these problems and re-submit:&quot;, depending
      on the number of errors.
    </p>
    <p>
      This example includes some buttons that set the <code>error</code>{' '}
      in the <FormLink/> to demonstrate the different combinations.
    </p>
    <Example
      Element={Error} code={ErrorSrc}
      caption="error"
    >
    </Example>

    <h2>errors</h2>
    <p>
      This example does a similar thing but sets multiple <code>errors</code>.
    </p>
    <Example
      Element={Errors} code={ErrorsSrc}
      caption="error"
    >
    </Example>

    <p>
      You can always implement your own component for displaying errors if
      you don&apos;t like the way this works.  Just be warned that there are
      the various different possibilities that need to be accounted for.
      You can use the <code>useForm</code> function to get access to the form
      context which contains the <code>error</code> and/or <code>errors</code>.
    </p>
    <p>
      See the implementations of the{' '}
      <a href="https://github.com/abw/react-formula/blob/master/lib/Form/Errors.jsx">Errors</a>{' '}
      and{' '}
      <a href="https://github.com/abw/react-formula/blob/master/lib/Form/Error.jsx">Error</a>{' '}
      modules for a starting point.
    </p>

  </div>

export default ErrorsExamples