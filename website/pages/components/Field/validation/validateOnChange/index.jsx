import React          from 'react'
import OnChangeSrc    from './examples/OnChange.jsx?raw'
import OnChange       from './examples/OnChange.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'
import { MinValidateLengthLink } from '@/site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>validateOnChange</code></h2>
    <Split>
      <p>
        You can set the <code>validateOnChange</code> flag to enable validation
        any time the field value changes.  The <MinValidateLengthLink/> property
        can be set to only trigger validation when the input length exceeds a
        threshold.
      </p>
      <Suggest>
        Enter some text in the field below.  Once you&apos;ve entered three
        letters the validation will kick in.  You should see an error if you
        enter any letters that aren&apos;t vowels.
      </Suggest>
    </Split>
    <Example
      Element={OnChange} code={OnChangeSrc}
      caption="validateOnChange"
    />

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