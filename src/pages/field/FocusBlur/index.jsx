import React         from 'react'
import Example       from '../../../site/Example.jsx'
import FocusSource   from './examples/Focus.jsx?raw'
import FocusElement  from './examples/Focus.jsx'
import BlurSource    from './examples/Blur.jsx?raw'
import BlurElement   from './examples/Blur.jsx'

const FocusBlur = () =>
  <div>
    <h1>Focus and Blur</h1>

    <Example
      Element={FocusElement} code={FocusSource}
      caption="onFocus"
    >
      <p>
        You can add an <code>onFocus</code> handler to a <code>Field</code>{' '}
        which will be called when the field is focussed.  The field context
        will be passed as an argument.
      </p>
    </Example>

    <Example
      Element={BlurElement} code={BlurSource}
      caption="onBlur"
    >
      <p>
        Unsurprisingly you can also add an <code>onBlur</code> handler.
      </p>
    </Example>
  </div>


export default FocusBlur