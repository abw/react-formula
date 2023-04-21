import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import RequiredSource from './examples/Required.jsx?raw'
import Required       from './examples/Required.jsx'
import ValidateSource from './examples/Validate.jsx?raw'
import Validate       from './examples/Validate.jsx'
import OnChangeSource from './examples/OnChange.jsx?raw'
import OnChange       from './examples/OnChange.jsx'

const ValidationExamples = () =>
  <div>
    <h1>Validation</h1>

    <h2>required</h2>
    <p>
      You can set the <code>required</code> option on a field to indicate
      that it&apos;s required.  By default, validation will happen when the
      field is submitted. You can set <code>validateOnBlur</code> to{' '}
      <code>true</code> to force validation to happen when a field is
      blurred (i.e. when the user moves focus away from a field).  This
      can be set either on individual fields or on the form to act as the
      default for all fields.
    </p>
    <Example
      Element={Required} code={RequiredSource}
      caption="required"
    >
      <p>
        Try focussing on one of the fields and then click outside the field
        without entering anything.
      </p>
    </Example>

    <h2>validate</h2>
    <p>
      You can set the <code>validate</code> option to define a validation
      function.  In this example we&apos;re using{' '}
      <a href="https://www.npmjs.com/package/yup">Yup</a> but you can
      use anything you like.  It should return the validated value on
      success or throw an error if the valid is invalid.
    </p>
    <Example
      Element={Validate} code={ValidateSource}
      caption="validate"
    >
      <p>
        Try switching focus from one field to another without entering
        anything.  You can see the custom validation errors.
      </p>
    </Example>

    <h2>validateOnChange and minValidateLength</h2>
    <p>
      You can set the <code>validateOnChange</code> flag to enable validation
      any time the field value changes.  The <code>minValidateLength</code> can
      be set to only trigger validation when the input length exceeds a
      threshold.
    </p>
    <Example
      Element={OnChange} code={OnChangeSource}
      caption="onChange"
    >
      <p>
        Enter some text in the field below.  Once you&apos;ve entered three
        letters the validation will kick in.  You should see an error if you
        enter any letters that aren&apos;t vowels.
      </p>
    </Example>

  </div>


export default ValidationExamples