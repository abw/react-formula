import React          from 'react'
import SetInvalidSrc  from './examples/SetInvalid.jsx?raw'
import SetInvalid     from './examples/SetInvalid.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'
import { OnLoadLink } from '@/site/Links.jsx'

const SetInvalidExamples = () =>
  <div className="prose">
    <h1>Field Functions</h1>

    <h2><code>setInvalid()</code></h2>
    <Split>
      <div>
        <p>
          The <code>setInvalid()</code> function can be called to mark a field
          as invalid.
        </p>
        <p>
          You can use the <OnLoadLink/> property to save a reference to a field
          context object.
          Then call the <code>setInvalid()</code> method on the field object to
          make it invalid.  An optional argument can be provided as the message
          to display.
        </p>
      </div>
      <Suggest>
        Click on one of the buttons to set the corresponding field to be invalid.
      </Suggest>
    </Split>
    <Example
      Element={SetInvalid} code={SetInvalidSrc}
      caption="setFocus()"
    />

    <SeeAlso
      links={[
        'field:setInvalid',
      ]}
    />
  </div>


export default SetInvalidExamples