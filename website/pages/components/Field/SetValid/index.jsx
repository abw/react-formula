import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import SetValidSrc    from './SetValid.jsx?raw'
import SetValid       from './SetValid.jsx'
import SeeAlso        from '../../../../site/SeeAlso.jsx'
import Split          from '../../../../site/Split.jsx'
import Suggest        from '../../../../site/Suggest.jsx'
import { OnLoadLink } from '../../../../site/Links.jsx'

const SetValidExamples = () =>
  <div className="prose">
    <h1>Field Functions</h1>

    <h2><code>setValid()</code></h2>
    <Split>
      <div>
        <p>
          The <code>setValid()</code> function can be called to mark a field
          as valid.
        </p>
        <p>
          You can use the <OnLoadLink/> property to save a reference to a field
          context object.
          Then call the <code>setValid()</code> method on the field object to
          make it valid.  An optional argument can be provided as the message
          to display.
        </p>
      </div>
      <Suggest>
        Click on one of the buttons to set the corresponding field to be valid.
      </Suggest>
    </Split>
    <Example
      Element={SetValid} code={SetValidSrc}
      caption="setFocus()"
    />

    <SeeAlso
      links={[
        'field:setInvalid',
      ]}
    />
  </div>


export default SetValidExamples