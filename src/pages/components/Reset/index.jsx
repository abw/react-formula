import React         from 'react'
import Example       from '../../../site/Example.jsx'
import ResetSrc      from './examples/Reset.jsx?raw'
import Reset         from './examples/Reset.jsx'
import Properties    from './examples/Properties.jsx'
import PropertiesSrc from './examples/Properties.jsx?raw'
import OnResetSrc    from './examples/OnReset.jsx?raw'
import OnReset       from './examples/OnReset.jsx'
import { FormLink } from '../../../site/Links.jsx'

const ResetExamples = () =>
  <div>
    <h1>Reset</h1>
    <p>
      The <code>Reset</code> component can be used to add a reset button
      which will reset the form to its initial state.  Any{' '}
      <code>values</code> defined on the <FormLink/> will be restored.
      Any fields that have a <code>default</code> value will be reset to that
      value.
    </p>
    <Example
      Element={Reset} code={ResetSrc}
      caption="Reset"
    >
      <p>
        Try entering some text in the fields below then click on the Reset
        button.  You should see the fields reset to their original state.
      </p>
    </Example>

    <h2>Properties</h2>
    <p>
      You can use the <code>text</code> property to change the text that&apos;s
      displayed on the button and add a custom CSS class using <code>className</code>.
    </p>
    <Example
      Element={Properties} code={PropertiesSrc}
      caption="Properties"
    />

    <h2>onReset</h2>
    <p>
      You can use the <code>onReset</code> property to register a function
      that should be called when the form is reset.
    </p>
    <Example
      Element={OnReset} code={OnResetSrc}
      caption="onReset"
    />

  </div>


export default ResetExamples