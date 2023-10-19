import React    from 'react'
import Example  from '../../../../site/Example.jsx'
import ResetSrc from './Reset.jsx?raw'
import Reset    from './Reset.jsx'
import SeeAlso  from '../../../../site/SeeAlso.jsx'
import Split    from '../../../../site/Split.jsx'
import Suggest  from '../../../../site/Suggest.jsx'
import { OnLoadLink } from '../../../../site/Links.jsx'

const ResetExamples = () =>
  <div className="prose">
    <h1>Field Functions</h1>

    <h2><code>reset()</code></h2>
    <Split>
      <div>
        <p>
          The <code>reset()</code> function can be called to reset a field
          to its initial state.
        </p>
        <p>
          You can use the <OnLoadLink/> property to save a reference to a field
          context object.
          Then call the <code>reset()</code> method on the field object to
          make it invalid.  An optional argument can be provided as the message
          to display.
        </p>
      </div>
      <Suggest>
        Enter some text in either of the inputs below and then click on the
        corresponding button to reset it to the original value.
      </Suggest>
    </Split>

    <Example
      Element={Reset} code={ResetSrc}
      caption="reset()"
    />

    <SeeAlso
      links={[
        'form:setFocus',
        'field:onFocus',
        'field:onBlur',
      ]}
    />
  </div>


export default ResetExamples