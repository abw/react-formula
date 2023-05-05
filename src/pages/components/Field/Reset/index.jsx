import React    from 'react'
import Example  from '../../../../site/Example.jsx'
import ResetSrc from './Reset.jsx?raw'
import Reset    from './Reset.jsx'
import SeeAlso  from '../../../../site/SeeAlso.jsx'
import { FieldLink, FormLink, FormSetFocusLink } from '../../../../site/Links.jsx'

const ResetExamples = () =>
  <div>
    <h1>Field Functions</h1>

    <h2><code>reset()</code></h2>
    <p>
      If you want to programmatically reset a <FieldLink/> then you
      first need to capture a reference to it.  You can do that
      using an <code>onLoad</code> property to set a state variable.
    </p>
    <p>
      Then call the <code>reset()</code> method on the field object to
      reset it.
    </p>
    <Example
      Element={Reset} code={ResetSrc}
      caption="reset()"
    >
      <p>
        Enter some text in either of the inputs below and then click on the
        corresponding button to reset it to the original value.
      </p>
    </Example>
    <p>
      You can also focus on fields by name using the <FormLink/>{' '}
      <FormSetFocusLink/> method.
    </p>
    <SeeAlso
      links={[
        'form:setFocus',
        'field:onFocus',
        'field:onBlur',
      ]}
    />
  </div>


export default ResetExamples