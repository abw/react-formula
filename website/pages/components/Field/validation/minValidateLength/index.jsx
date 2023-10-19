import React        from 'react'
import Validate     from './examples/Validate.jsx'
import ValidateSrc  from './examples/Validate.jsx?raw'
import Example      from '@/site/Example.jsx'
import SeeAlso      from '@/site/SeeAlso.jsx'
import Split        from '@/site/Split.jsx'
import Suggest      from '@/site/Suggest.jsx'
import { ValidateOnChangeLink } from '@/site/Links.jsx'

const MinValidateLengthExamples = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>minValidateLength</code></h2>
    <Split>
      <p>
        You can set the <ValidateOnChangeLink/> property flag to enable
        validation any time the field value changes.  The{' '}
        <code>minValidateLength</code> property can
        be set to only trigger validation when the input length exceeds a
        threshold.
      </p>
      <Suggest>
        Enter a username in the form below.  The usernames <code>alice</code>,
        <code>bob</code> and <code>charlie</code> will return a validation
        error saying that they&apos;re not available.  There&apos;s a minimum
        length for a username so we wait until at least three characters have
        been entered before checking to see if the username is available.  Note
        that the validation will also be triggered when the form is submitted,
        regardless of how many characters have been entered.  For that reason
        the validation function also rejects any username that is too short.
      </Suggest>
    </Split>
    <Example
      Element={Validate} code={ValidateSrc}
      caption="minValidateLength"
    />

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