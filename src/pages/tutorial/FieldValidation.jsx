import React from 'react'
import LoginForm    from './examples/LoginFieldValidation.jsx'
import LoginFormSrc from './examples/LoginFieldValidation.jsx?raw'
import Example from '../../site/Example.jsx'
import { FieldLink, FormLink } from '../../site/Links.jsx'
import { TutorialPager } from '../../site/Tutorial.jsx'

const FieldValidation = () =>
  <div>
    <h1>Field Validation</h1>
    <p className="intro">
      It&apos;s good practice to validate fields as thoroughly as possible.  On
      the client-side this is important to help draw the user&apos;s attention
      to any invalid fields <i>before</i> the form is submitted.  Of course
      you&apos;ll also need some kind of server-side validation, but we&apos;ll
      look at that later.
    </p>

    <h2>Login Form With Field Validation</h2>
    <p>
      You can add a <code>validate</code> property to a field to provide a
      function to validate the input.  This will be passed the field
      value and should return a Promise that resolves with the (possibly
      modified) value if the input is valid, or rejects with an error if not.
      In these examples we&apos;ll be using{' '}
      <a href="https://github.com/jquense/yup">Yup</a> but you should
      be able to use any validation library or even roll your own validation
      functions for special cases.
    </p>
    <p>
      You can add the <code>validate</code> function to the <FieldLink/>{' '}
      component if you like, but you may find that things quickly get a bit
      messy.  So this is a good opportunity to demonstrate the other way of
      defining form fields, using a schema.  This allows you to define your
      field properties separately and then pass them to the <FormLink/>{' '}
      component as the <code>fields</code> property.  When you include
      a <FieldLink/> the <code>name</code> will be used to lookup the default
      properties for the field from the <code>fields</code> you&apos;ve
      provided.
    </p>
    <p>
      There are a number of benefits to defining a separate schema for your
      form fields.  For one, it means that all your field definitions are
      in a single place where you can easily inspect and edit them without
      having to wade through lots of markup.  It also means that your form
      markup remains free of all the functional code, allowing you to
      concentrate on layout, styling and other presentational aspects.
      If you decide to split a long form into multiple parts, change the
      order of some fields, or perhaps display some fields side-by-side
      instead of stacked vertically, then it&apos;s easier to move a single{' '}
      <code className="code">Field</code> element around, or just edit the {' '}
      <code className="code">name</code> property than it is to cut and paste
      large blocks of code.
    </p>
    <Example
      Element={LoginForm} code={LoginFormSrc}
      caption="Field Validation"
    >
      <p>
        Try entering some values in the form below and click on the
        &quot;Login&quot; button. If you don&apos;t provide a value, or
        if you provide an invalid value then you should see the validation
        errors.
      </p>
    </Example>
    <h2><code>validateOnBlur</code></h2>
    <p>
      By default, field validation happens when the form is submitted.
      You can add the <code>validateOnBlur</code> property to either the{' '}
      <FormLink/> or individual <FieldLink/> components if you want the
      validation to happen when a field is blurred.
    </p>
    <h2><code>validateOnChange</code> and <code>minValidationLength</code></h2>
    <p>
      You can add the <code>validateOnChange</code> property to either the{' '}
      <FormLink/> or individual <FieldLink/> components if you want validation
      to happen any time the field value changes, i.e. as the user types.
      The <code>minValidationLength</code> can be set if you only want it to
      start after the user has entered a particular number of characters. The
      default values is <code>1</code>.
    </p>
    <h2>Where Next?</h2>
    <p>
      If you need to perform some kind of validation where you have access
      to all of the submitted values then you can do that at the form level
      We&apos;ll look at that next.
    </p>
    <TutorialPager uri="field-validation"/>
  </div>

export default FieldValidation