import React from 'react'
import PasswordCheck    from './examples/PasswordCheck.jsx'
import PasswordCheckSrc from './examples/PasswordCheck.jsx?raw'
import Example from '../../site/Example.jsx'
import { FieldsLink, FormLink, FormValidateLink } from '../../site/Links.jsx'
import { TutorialPager } from '../../site/Tutorial.jsx'

const FormValidation = () =>
  <div>
    <h1>Form Validation</h1>
    <p className="intro">
      Sometimes you need access to all the submitted field values to validate
      the form.  The classic example is a registration form where you ask the
      user to enter their password twice to make sure that they&apos;re sure
      about what they&apos;ve entered.  Although this isn&apos;t necessarily
      considered good practice these days, it illustrates the principle well.
    </p>

    <h2>Registration Form With Validation</h2>
    <p>
      You can add a <FormValidateLink/> property to a form to provide a
      function to validate the inputs from all fields.  The function will be
      called after the field-level validation, and only if all fields have
      validated successfully.
    </p>
    <p>
      The function will be passed a <code>values</code> object containing
      the validated field values.  It should return a Promise that resolves
      with the (possibly modified) values if the input is valid, or rejects
      with an an <code>error</code> and/or array of <code>errors</code> if not.
      The <code>error</code> can be used to define an error for the form that
      isn&apos;t specify to any particular field.  Each item in the errors
      array should relate to a field identified by <code>name</code>, with
      an additional <code>message</code> indicating why it is invalid.
    </p>
    <p>
      We&apos;re also using this opportunity to introduce you to the{' '}
      <FieldsLink/> component which allows you to add multiple fields to
      a <FormLink/> in one fell swoop.
    </p>
    <Example
      Element={PasswordCheck} code={PasswordCheckSrc}
      caption="Form Validation"
    >
      <p>
        Try entering some values in the form below and click on the
        &quot;Register&quot; button. You should see the field level validation
        errors if you don&apos;t provide a valid value for any field. Or if
        you provide different values for the Password and Confirm Password
        fields then you should see the form validation errors.
      </p>
    </Example>
    <h2>Where Next?</h2>
    <p>
      Now that we&apos;ve handled the validation of the form we can talk
      about how the form is submitted.
    </p>
    <TutorialPager uri="form-validation"/>
  </div>

export default FormValidation