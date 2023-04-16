import React          from 'react'
import Example        from '../../../site/Example.jsx'
import OnChangeSource from './examples/OnChange.jsx?raw'
import OnChange       from './examples/OnChange.jsx'

const ValidationExamples = () =>
  <div>
    <h1>Validation</h1>

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