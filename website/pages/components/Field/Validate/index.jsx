import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import Validate       from './Validate.jsx'
import ValidateSrc    from './Validate.jsx?raw'
import Validator      from './Validator.jsx'
import ValidatorSrc   from './Validator.jsx?raw'
import { RequiredLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'
import Split from '../../../../site/Split.jsx'
import Suggest from '../../../../site/Suggest.jsx'

const ValidateExamples = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <p>
      There are a number of different ways to validate field input.
      For simple cases where a value must be provided you can use the{' '}
      <RequiredLink/> property.  If you need to perform additional
      validation then you can do that using a <code>validate</code> function.
    </p>

    <h2><code>validate</code></h2>
    <Split>
      <div>
        <p>
          You can use the <RequiredLink/> property to mark a field as being
          required, but it&apos;s a blunt instrument.  All it will do is check
          that a field has some value entered. For more robust validation you can
          use the <code>validate</code> property to define an <code>async</code>{' '}
          validation function.
        </p>
        <p>
          In this example we&apos;re using{' '}
          <a href="https://www.npmjs.com/package/yup">Yup</a> but you can
          use anything you like.  It should return the validated value on
          success or throw an error if the valid is invalid.
        </p>
      </div>
      <Suggest>
        Try submitting the form without entering any values for either of
        the fields. You should see the custom validation errors.
      </Suggest>
    </Split>
    <Example
      Element={Validate} code={ValidateSrc}
      caption="validate"
    />

    <Split align="end">
      <p>
        <h3>NOTE: this may change</h3>
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
      <Suggest>
        In this somewhat contrived example we require the user to enter a
        username containing the word &quot;badger&quot;.
      </Suggest>
    </Split>
    <Example
      Element={Validator} code={ValidatorSrc}
      caption="validate"
    />
    <SeeAlso
      links={[
        'field:required',
        'field:validateOnChange',
        'field:validateOnBlur',
      ]}
    />
  </div>


export default ValidateExamples