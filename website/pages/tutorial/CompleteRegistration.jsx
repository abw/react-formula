import React                from 'react'
import Example              from '../../site/Example.jsx'
import CodeBlock            from '../../site/CodeBlock.jsx'
import TutorialPager        from '../../site/Pager/Tutorial.jsx'
import RegistrationForm     from './examples/RegistrationForm.jsx'
import RegistrationFormSrc  from './examples/RegistrationForm.jsx?raw'
import CustomCSS            from './examples/CustomCSS.css?raw'
import './examples/CustomCSS.css'
import {
  FieldLink, FieldsetLink, FormLink,
  CheckboxInputLink, RadioInputLink, SelectInputLink, TypeLink,
  ShowOptionalLink, ShowRequiredLink, OnChangeLink
} from '../../site/Links.jsx'
import Split from '../../site/Split.jsx'

const CompleteRegistration = () =>
  <div className="prose">
    <h1>Complete Registration Form</h1>
    <p className="intro">
      Here&apos;s a more complete (albeit rather contrived) example of a
      user registration form.
    </p>

    <h2>Input Types</h2>
    <Split>
      <p>
        This example demonstrates some of the other fields input types.
        Set the <FieldLink/> <TypeLink/> to <code>radio</code> for
        a <RadioInputLink/> button input and provide some <code>options</code>,
        as shown here for the <code>experience</code> field.  Or set it
        to <code>select</code> for a <SelectInputLink/> input as shown in the{' '}
        <code>animal</code> field.  Set it to <code>checkbox</code> for a{' '}
        <CheckboxInputLink/> and provide some <code>text</code> to go alongside it.
      </p>
      <p>
        You can also use the <TypeLink/> to set other text input types,
        like <code>number</code> and <code>date</code>.
      </p>
    </Split>
    <Example
      Element={RegistrationForm} code={RegistrationFormSrc}
      caption="Registration Form"
    />

    <h2>Components and Properties</h2>
    <dl>
      <dt><code>Fieldset</code> Component</dt>
      <dd>
        <p>
          The example includes the <FieldsetLink/> component which can be used
          to group fields together in a set, complete with a <code>legend</code>.
        </p>
      </dd>
      <dt><code>showRequired</code> and <code>showOptional</code></dt>
      <dd>
        <p>
          The <ShowOptionalLink/> and <ShowRequiredLink/> properties
          can be set on the <FormLink/> or individual <FieldLink/> components
          to have an additional label displayed telling the user which fields
          they do and don&apos;t need to complete.
        </p>
      </dd>
      <dt><code>onChange</code></dt>
      <dd>
        <p>
          The <OnChangeLink/> property can be added to a <FieldLink/> to
          watch for changes in the field value.  You can see it in use above in
          the <code>color</code> field.
        </p>
      </dd>
    </dl>

    <h2>Custom CSS</h2>
    <p>
      The example above uses a couple of custom CSS classes, {' '}
      <code>lg-grid-2</code> and <code>lg-grid-3</code> to display
      fields in 2 and 3 columns, respectively, on larger screen sizes.
      You may already be using a CSS framework which includes something
      similar which you can use instead.  Here&apos;s the CSS for those
      classes for completeness.
    </p>
    <CodeBlock code={CustomCSS} language="css" className="mar-b-2" fixed/>

    <h2>Where Next?</h2>
    <p>
      There&apos;s a lot to take in there.  For the next example we&apos;ll
      scale things back a bit and look at the common case where you want to
      edit some existing data using a form.
    </p>

    <TutorialPager uri="complete-registration"/>
  </div>

export default CompleteRegistration