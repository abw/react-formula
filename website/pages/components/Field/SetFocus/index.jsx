import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import SetFocusSrc   from './SetFocus.jsx?raw'
import SetFocus      from './SetFocus.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'
import Split from '../../../../site/Split.jsx'
import Suggest from '../../../../site/Suggest.jsx'
import { FormLink, FormSetFocusLink, OnLoadLink } from '../../../../site/Links.jsx'

const SetFocusExamples = () =>
  <div className="prose">
    <h1>Field Functions</h1>

    <h2><code>setFocus()</code></h2>
    <Split>
      <div>
        <p>
          The <code>setFocus()</code> function can be called to focus a field.
          You can use the <OnLoadLink/> property to save a reference to a field
          context object.
        </p>
        <p>
          Then call the <code>setFocus()</code> method on the field object to
          focus it.
        </p>
      </div>
      <Suggest>
        Click on one of the buttons to focus the corresponding field.
      </Suggest>
    </Split>
    <Example
      Element={SetFocus} code={SetFocusSrc}
      caption="setFocus()"
    />

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


export default SetFocusExamples