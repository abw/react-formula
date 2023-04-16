import React          from 'react'
import Example        from '../../../site/Example.jsx'
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
    <Example
      Element={Required} code={RequiredSource}
      caption="required"
    >
      <p>
        You can set the <code>required</code> option on a field to indicate
        that it&apos;s required.  By default, validation will happen when the
        field is blurred or the form is submitted.  Try focussing on one
        of the fields and then click outside the field without entering
        anything.  You can set <code>validateOnBlur</code> to{' '}
        <code>false</code> if you only want validation to happen when the
        form is submitted.
      </p>
    </Example>

    <h2>validate</h2>
    <Example
      Element={Validate} code={ValidateSource}
      caption="validate"
    >
      <p>
        You can set the <code>validate</code> option to define a validation
        function.  In this example we&apos;re using{' '}
        <a href="https://www.npmjs.com/package/yup">Yup</a> but you can
        use anything you like.  It should return the validated value on
        success or throw an error if the valid is invalid.
      </p>
    </Example>

    <h2>validateOnChange and minValidateLength</h2>
    <Example
      Element={OnChange} code={OnChangeSource}
      caption="onChange"
    >
      <p>
        You can set the <code>validateOnChange</code> flag to enable validation
        any time the field value changes.  The <code>minValidateLength</code> can
        be set to only trigger validation when the input length exceeds a
        threshold.
      </p>
    </Example>

  </div>


export default ValidationExamples