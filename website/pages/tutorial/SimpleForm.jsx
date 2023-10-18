import React              from 'react'
import Example            from '../../site/Example.jsx'
import TutorialPager      from '../../site/Pager/Tutorial.jsx'
import BasicLoginForm     from './examples/BasicLoginForm.jsx'
import BasicLoginFormSrc  from './examples/BasicLoginForm.jsx?raw'
import {
  FieldLabelLink, FieldLink, FormLink, NameLink, RequiredLink,
  SubmitLink, TypeLink
} from '../../site/Links.jsx'
import Split from '../../site/Split.jsx'
import Suggest from '../../site/Suggest.jsx'

const SimpleForm = () =>
  <div className="prose">
    <h1>Defining a Form</h1>
    <Split align="start">
      <p className="intro">
        One of the underlying principles of this library is, to borrow a phrase
        from Larry Wall, to make simple things simple and hard things possible.
        It should be just as easy, if not easier, to create a form using{' '}
        <code>react-formula</code> as it should be using vanilla HTML.
      </p>
      <blockquote className="intro">
        Make simple things simple and hard things possible.
        <div className="attrib">
          Larry Wall
        </div>
      </blockquote>
    </Split>

    <h2>A Simple Login Form</h2>
    <Split>
      <p>
        So without further ado, let&apos;s look at the one form that most
        websites will require: a user login form.
      </p>
      <Suggest>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button. Also see what happens if you don&apos;t
        enter a value for either field.
      </Suggest>
    </Split>
    <Example
      Element={BasicLoginForm} code={BasicLoginFormSrc}
      caption="Basic Login Form"
    />
    <h2>The Basic Components</h2>
    <dl>
      <dt><code>Form</code></dt>
      <dd>
        <p>
          A form is defined using the <FormLink/> component.  You can include
          any content you like inside the component, but most often you&apos;ll
          want to include at least one <FieldLink/> and a <SubmitLink/> button.
        </p>
      </dd>
      <dt><code>Field</code></dt>
      <dd>
        <p>
          The example contains two <FieldLink/> components.  Each <b>MUST</b>{' '}
          define a <NameLink/> and everything else is optional.
          In both cases we add a <FieldLabelLink/> and the <RequiredLink/>{' '}
          property to indicate that the user must enter a value.  In the case of the{' '}
          <code>password</code> field we also set the input <TypeLink/> to{' '}
          <code>password</code>.
        </p>
      </dd>
      <dt><code>Submit</code></dt>
      <dd>
        <p>
          The <SubmitLink/> component is used to render a button to submit the
          form.  In the example above we set the <code>text</code> property to
          customise the text displayed on the button. Otherwise it defaults
          to &quot;Submit&quot;.
        </p>
      </dd>
    </dl>

    <h2>Where Next?</h2>
    <p>
      The <RequiredLink/> property is useful for simple cases, but
      at some point you&apos;ll want to add more thorough validation for
      fields.  Let&apos;s look at that next.
    </p>
    <TutorialPager uri="simple-form"/>
  </div>

export default SimpleForm