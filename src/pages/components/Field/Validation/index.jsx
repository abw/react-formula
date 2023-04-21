import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import Required       from './examples/Required.jsx'
import RequiredSrc    from './examples/Required.jsx?raw'
import Validate       from './examples/Validate.jsx'
import ValidateSrc    from './examples/Validate.jsx?raw'
import Validator      from './examples/Validator.jsx'
import ValidatorSrc   from './examples/Validator.jsx?raw'
import OnChangeSrc    from './examples/OnChange.jsx?raw'
import OnChange       from './examples/OnChange.jsx'

const ValidationExamples = () =>
  <div>
    <h1>Validation</h1>
    <p>
      There are a number of different ways to validate field input.
      For simple cases where a value must be provided you can use the{' '}
      <code>required</code> property.  If you need to perform additional
      validation then you can do that using a <code>validate</code> function.
    </p>

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
      Element={Required} code={RequiredSrc}
      caption="required"
    >
      <p>
        Try submitting the form without entering anything.  The{' '}
        <code>validateOnBlur</code> option is set so you can also focus on
        a field and then click outside the field to trigger the validation.
      </p>
    </Example>

    <h2>validate</h2>
    <p>
      You can set the <code>validate</code> option to define an{' '}
      <code>async</code> validation
      function.  In this example we&apos;re using{' '}
      <a href="https://www.npmjs.com/package/yup">Yup</a> but you can
      use anything you like.  It should return the validated value on
      success or throw an error if the valid is invalid.
    </p>
    <Example
      Element={Validate} code={ValidateSrc}
      caption="validate"
    >
      <p>
        Try switching focus from one field to another without entering
        anything.  You can see the custom validation errors.
      </p>
    </Example>
    <p>
      The <code>validate</code> function is passed four arguments.  The first
      is the field value for common cases where that&apos;s all you need to
      determine if the field is valid.  The second argument is the field
      context containing everything you need to know about the field state
      and callable actions to change it.  The third and fourth arguments are{' '}
      <code>resolve</code> and <code>reject</code> functions which can be
      called to validate or invalidate the field, respectively.  The{' '}
      <code>resolve</code> function should be passed an object containing
      the <code>value</code>, which may be modified by your function.
      The <code>reject</code> function should be passed an object containing
      an error <code>message</code>, and optionally a new <code>value</code>{' '}
      for the field.
    </p>
    <Example
      Element={Validator} code={ValidatorSrc}
      caption="validate"
    >
      <p>
        In this somewhat contrived example we require the user to enter a
        username containing the word &quot;badger&quot;.
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
      Element={OnChange} code={OnChangeSrc}
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