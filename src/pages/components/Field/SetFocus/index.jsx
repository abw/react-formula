import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import SetFocusSrc   from './SetFocus.jsx?raw'
import SetFocus      from './SetFocus.jsx'
import { FieldLink, FormLink, FormSetFocusLink } from '../../../../site/Links.jsx'

const SetFocusExamples = () =>
  <div>
    <h1>Focus and Blur</h1>

    <h2><code>setFocus()</code></h2>
    <p>
      If you want to programmatically set the focus on a <FieldLink/> then you
      first need to capture a reference to it.  You can do that
      using an <code>onLoad</code> property to set a state variable.
    </p>
    <p>
      Then call the <code>setFocus()</code> method on the field object to
      focus it.
    </p>
    <Example
      Element={SetFocus} code={SetFocusSrc}
      caption="setFocus()"
    >
      <p>
        Click on one of the buttons to focus on a field.
      </p>
    </Example>
    <p>
      You can also focus on fields by name using the <FormLink/>{' '}
      <FormSetFocusLink/> method.
    </p>
  </div>


export default SetFocusExamples