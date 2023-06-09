import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import OnChangeSrc    from './OnChange.jsx?raw'
import OnChange       from './OnChange.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'
import { MinValidateLengthLink } from '../../../../site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <div>
    <h1>Field Validation</h1>
    <h2><code>validateOnChange</code></h2>
    <p>
      You can set the <code>validateOnChange</code> flag to enable validation
      any time the field value changes.  The <MinValidateLengthLink/> property
      can be set to only trigger validation when the input length exceeds a
      threshold.
    </p>
    <Example
      Element={OnChange} code={OnChangeSrc}
      caption="validateOnChange"
    >
      <p>
        Enter some text in the field below.  Once you&apos;ve entered three
        letters the validation will kick in.  You should see an error if you
        enter any letters that aren&apos;t vowels.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:required',
        'field:validate',
        'field:validateOnBlur',
        'field:minValidateLength',
      ]}
    />
  </div>


export default ValidateOnChangeExamples