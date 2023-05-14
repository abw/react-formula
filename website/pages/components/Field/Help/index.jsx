import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import HelpSrc       from './Help.jsx?raw'
import Help          from './Help.jsx'
import SeeAlso       from '../../../../site/SeeAlso.jsx'

const HelpExamples = () =>
  <div>
    <h1>Field Properties</h1>

    <h2><code>help</code></h2>
    <p>
      The <code>help</code> property can be used to define some additional
      help for the user.  By default it is displayed underneath the field
      input.
    </p>
    <p>
      If the field input fails to validate then the validation error message
      will be displayed in its place.
    </p>
    <Example
      Element={Help} code={HelpSrc}
      caption="help"
    >
      <p>
        Try submitting the form without entering any value.  You should see
        the help message replaced by the validation error.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:name',
        'field:label',
        'field:required',
        'field:validate',
        'form:fields',
      ]}
    />
  </div>


export default HelpExamples