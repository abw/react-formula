import React          from 'react'
import Example        from '../../../site/Example.jsx'
import Required       from './examples/Required.jsx'
import RequiredSrc    from './examples/Required.jsx?raw'
import ReqErrors      from './examples/RequiredErrors.jsx'
import ReqErrorsSrc   from './examples/RequiredErrors.jsx?raw'
import Title          from './examples/Title.jsx'
import TitleSrc       from './examples/Title.jsx?raw'
import TitleFn        from './examples/TitleFn.jsx'
import TitleFnSrc     from './examples/TitleFn.jsx?raw'
import Prompt         from './examples/Prompt.jsx'
import PromptSrc      from './examples/Prompt.jsx?raw'
import PromptFn       from './examples/PromptFn.jsx'
import PromptFnSrc    from './examples/PromptFn.jsx?raw'
import FormOptions    from './examples/FormOptions.jsx'
import FormOptionsSrc from './examples/FormOptions.jsx?raw'
import Error          from './examples/Error.jsx'
import ErrorSrc       from './examples/Error.jsx?raw'
import Errors         from './examples/Errors.jsx'
import ErrorsSrc      from './examples/Errors.jsx?raw'
import { FormLink } from '../../../site/Links.jsx'
import Split from '@/website/site/Split.jsx'
import Suggest from '@/website/site/Suggest.jsx'

const ErrorsExamples = () =>
  <div className="prose flow">
    <h1>Errors</h1>

    <Split align="end">
      <div>
        <p>
          By default, validation errors will be displayed against the corresponding
          fields.
          In this example the first two fields are marked as{' '}
          <code>required</code>.  A validation error will be raised for them
          if the form is submitted without a value being entered.
        </p>
      </div>
      <Suggest>
        <p>
          Try submitting the form below without entering anything for either
          of the first two fields.
        </p>
      </Suggest>
    </Split>
    <Example
      Element={Required} code={RequiredSrc}
      caption="Required Fields" expand
    />

    <h2><code>Errors</code></h2>
    <p>
      The <code>Errors</code> component can be included anywhere inside the
      form to display field validation errors or more general errors.
    </p>
    <Example
      Element={ReqErrors} code={ReqErrorsSrc}
      caption="Errors" expand
    />

    <h2><code>title</code></h2>
    <p>
      The <code>title</code> property can be passed to set a custom title.
    </p>
    <Example
      Element={Title} code={TitleSrc}
      caption="Errors Title" expand
    />

    <p>
      The <code>title</code> property can also be a function which will be
      passed the number of errors.
    </p>
    <Example
      Element={TitleFn} code={TitleFnSrc}
      caption="Errors Title Function" expand
    />

    <h2><code>prompt</code></h2>
    <p>
      The <code>prompt</code> property can be passed to set a custom prompt.
    </p>
    <Example
      Element={Prompt} code={PromptSrc}
      caption="Errors Prompt" expand
    />

    <p>
      The <code>prompt</code> property can also be a function which will be
      passed the number of errors.
    </p>
    <Example
      Element={PromptFn} code={PromptFnSrc}
      caption="Errors Prompt Function" expand
    />

    <h2>Form Options: <code>errorsTitle</code> and <code>errorsPrompt</code></h2>

    <p>
      You can set the <code>title</code> and <code>prompt</code> properties for
      the <code>Errors</code> component as the <code>errorsTitle</code> and{' '}
      <code>errorsPrompt</code> properties, respectively.  They can be strings
      or functions that return strings, as described above.
    </p>
    <Example
      Element={FormOptions} code={FormOptionsSrc}
      caption="Form Errors Options" expand
    />

    <h2>Error Types</h2>

    <h3><code>error</code></h3>
    <Split>
      <div>
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
          message relates to, including the field <code>name</code> or{' '}
          <code>label</code>.
        </p>
      </div>
      <div>
        <p>
          This first example includes some buttons that set the <code>error</code>{' '}
          in the <FormLink/> to demonstrate the different combinations.
        </p>
      </div>
    </Split>
    <Example
      Element={Error} code={ErrorSrc}
      caption="error"
    />

    <h3><code>errors</code></h3>

    <Split>
      <div>
        <p>
          This second example sets the <code>errors</code>.  These are typically
          used when there is one or more errors relating to particular fields.
        </p>
        <p>
          If an entry in <code>errors</code> is a string then it will be
          displayed as it is.  The first two buttons generate these kind of
          errors.
        </p>
        <p>
          If an entry in <code>errors</code> is an object then it should contain
          a <code>message</code> which will be displayed.  Click on the third
          button to see this in action.
        </p>
      </div>
      <div>
        <p>
          If the object also contains a <code>label</code> then it will be
          displayed in bold in the errors list.  The fourth button can be
          clicked to demonstrate this.
        </p>
        <p>
          Alternately, the object can contain any of <code>field</code>,{' '}
          <code>name</code> or <code>param</code> to indicate the invalid field.
          If it corresponds to a known field then the field label (if it has
          one) will be displayed along with the error.  Click on the fifth
          button to see how this works.
        </p>
      </div>
    </Split>
    <Example
      Element={Errors} code={ErrorsSrc}
      caption="error"
    />

    <h2>Custom Error Component</h2>
    <Split>
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
    </Split>
  </div>

export default ErrorsExamples