import React       from 'react'
import Example     from '../../../site/Example.jsx'
import ResetSource from './examples/Reset.jsx?raw'
import Reset       from './examples/Reset.jsx'
import ResetProps       from './examples/ResetProperties.jsx'
import ResetPropsSource from './examples/ResetProperties.jsx?raw'

const ResetExamples = () =>
  <div>
    <h1>Reset</h1>
    <p>
      The <code>Reset</code> component can be used to add a reset button
      which will reset the form to its initial state.  Any{' '}
      <code>values</code> defined on the <code>Form</code> will be restored.
      Any fields that have a <code>default</code> value will be reset to that
      value.
    </p>
    <Example
      Element={Reset} code={ResetSource}
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
      Element={ResetProps} code={ResetPropsSource}
      caption="Properties"
    />

  </div>


export default ResetExamples