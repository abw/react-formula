import React from 'react'
import RegistrationForm    from './examples/RegistrationForm.jsx'
import RegistrationFormSrc from './examples/RegistrationForm.jsx?raw'
import CustomCSS           from './examples/CustomCSS.css?raw'
import Example from '../../site/Example.jsx'
import { TutorialPager } from '../../site/Tutorial.jsx'
import { CheckboxLink, DebugLink, FieldLink, FieldsetLink, FormLink, RadioLink, SelectLink } from '../../site/Links.jsx'
import CodeBlock from '../../site/CodeBlock.jsx'

const CompleteRegistration = () =>
  <div>
    <h1>Complete Registration Form</h1>
    <p className="intro">
      Here&apos;s a more complete (albeit rather contrived) example of a
      user registration form.
    </p>

    <h2>Input Types</h2>
    <p>
      This example demonstrates some of the other fields input types.
      Set the <FieldLink/> <code>type</code> to <code>radio</code> for
      a <RadioLink/> button input and provide some <code>options</code>,
      as shown here for the <code>experience</code> field.  Or set it
      to <code>select</code> for a <SelectLink/> input as shown in the{' '}
      <code>animal</code> field.  Set it to <code>checkbox</code> for a{' '}
      <CheckboxLink/> and provide some <code>text</code> to go alongside it.
    </p>
    <p>
      You can also use the <code>type</code> to set other text input types,
      like <code>number</code> and <code>date</code>.
    </p>
    <Example
      Element={RegistrationForm} code={RegistrationFormSrc}
      caption="Registration Form"
    >
    </Example>

    <h2><code>Fieldset</code> Component</h2>
    <p>
      The example includes the <FieldsetLink/> component which can be used
      to group fields together in a set, complete with a <code>legend</code>.
    </p>

    <h2><code>Debug</code> Component</h2>
    <p>
      This example also includes the <DebugLink/> component which, as the
      name suggests, can be useful for debugging.
    </p>


    <h2><code>showRequired</code> and <code>showOptional</code></h2>
    <p>
      The <code>showOptional</code> and <code>showRequired</code> properties
      can be set on the <FormLink/> or individual <FieldLink/> components
      to have an additional label displayed telling the user which fields
      they do and don&apos;t need to complete.
    </p>

    <h2><code>onChange</code></h2>
    <p>
      The <code>onChange</code> property can be added to a <FieldLink/> to
      watch for changes in the field value.  You can see it in use above in
      the <code>color</code> field.
    </p>

    <h2>Custom CSS</h2>
    <p>
      The example above uses a couple of custom CSS classes, {' '}
      <code>lg-grid-2</code> and <code>lg-grid-3</code> to display
      fields in 2 and 3 columns, respectively, on larger screen sizes.
      You may already be using a CSS framework which includes something
      similar which you can use instead.  Here&apos;s the CSS for those
      classes for completeness.
    </p>
    <CodeBlock code={CustomCSS} language="css" className="mar-b-2"/>

    <TutorialPager uri="complete-registration"/>
  </div>

export default CompleteRegistration