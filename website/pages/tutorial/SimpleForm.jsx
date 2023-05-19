import React              from 'react'
import Example            from '../../site/Example.jsx'
import TutorialPager      from '../../site/Pager/Tutorial.jsx'
import BasicLoginForm     from './examples/BasicLoginForm.jsx'
import BasicLoginFormSrc  from './examples/BasicLoginForm.jsx?raw'
import {
  FieldLabelLink, FieldLink, FormLink, NameLink, RequiredLink,
  SubmitLink, TypeLink
} from '../../site/Links.jsx'

const SimpleForm = () =>
  <div>
    <h1>Defining a Form</h1>
    <p className="intro">
      One of the underlying principles of this library is, to borrow a phrase
      from Larry Wall, to make simple things simple and hard things possible.
      It should be just as easy, if not easier, to create a form using{' '}
      <code>react-formula</code> as it should be using vanilla HTML.
    </p>

    <h2>A Simple Login Form</h2>
    <p>
      So without further ado, let&apos;s look at the one form that most
      websites will require: a user login form.
    </p>
    <Example
      Element={BasicLoginForm} code={BasicLoginFormSrc}
      caption="Basic Login Form"
    >
      <p>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button. Also see what happens if you don&apos;t
        enter a value for either field.  Note that the &quot;Forgot your
        password?&quot; link doesn&apos;t do anything useful - it&apos;t just
        there to demonstrate how you can include your own markup in a form.
      </p>
    </Example>

    <h2><code>Form</code></h2>
    <p>
      A form is defined using the <FormLink/> component.  You can include
      any content you like inside the component, but most often you&apos;ll
      want to include at least one <FieldLink/> and a <SubmitLink/> button.
    </p>

    <h2><code>Field</code></h2>
    <p>
      The example contains two <FieldLink/> components.  Each <b>MUST</b>{' '}
      define a <NameLink/> and everything else is optional.
      In both cases we add a <FieldLabelLink/> and the <RequiredLink/>{' '}
      property to indicate that the user must enter a value.  In the case of the{' '}
      <code>password</code> field we also set the input <TypeLink/> to{' '}
      <code>password</code>.
    </p>

    <h2><code>Submit</code></h2>
    <p>
      The <SubmitLink/> component is used to render a button to submit the
      form.  In the example above we set the <code>text</code> property to
      customise the text displayed on the button. Otherwise it defaults
      to &quot;Submit&quot;.
    </p>

    <h2>Where Next?</h2>
    <p>
      The <RequiredLink/> property is useful for simple cases, but
      at some point you&apos;ll want to add more thorough validation for
      fields.  Let&apos;s look at that next.
    </p>
    <TutorialPager uri="simple-form"/>
  </div>

export default SimpleForm