import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import Validate       from './Validate.jsx'
import ValidateSrc    from './Validate.jsx?raw'
import SeeAlso from '../../../../site/SeeAlso.jsx'
import { ValidateOnChangeLink } from '../../../../site/Links.jsx'

const MinValidateLengthExamples = () =>
  <div>
    <h1>Field Validation</h1>
    <h2><code>minValidateLength</code></h2>
    <p>
      You can set the <ValidateOnChangeLink/> property flag to enable
      validation any time the field value changes.  The{' '}
      <code>minValidateLength</code> property can
      be set to only trigger validation when the input length exceeds a
      threshold.
    </p>
    <Example
      Element={Validate} code={ValidateSrc}
      caption="minValidateLength"
    >
      <p>
        Enter a username in the form below.  The usernames <code>alice</code>,
        <code>bob</code> and <code>charlie</code> will return a validation
        error saying that they&apos;re not available.  There&apos;s a minimum
        length for a username so we wait until at least three characters have
        been entered before checking to see if the username is available.  Note
        that the validation will also be triggered when the form is submitted,
        regardless of how many characters have been entered.  For that reason
        the validation function also rejects any username that is too short.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:required',
        'field:validate',
        'field:validateOnBlur',
        'field:validateOnChange',
      ]}
    />
  </div>


export default MinValidateLengthExamples