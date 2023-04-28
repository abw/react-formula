import React               from 'react'
import Example             from '../../../site/Example.jsx'
import Cancel              from './examples/Cancel.jsx'
import CancelSrc           from './examples/Cancel.jsx?raw'
import CancelProps         from './examples/CancelProps.jsx'
import CancelPropsSrc      from './examples/CancelProps.jsx?raw'

const CancelExamples = () =>
  <div>
    <h1>Cancel</h1>
    <p>
      The <code>Cancel</code> component can be used to add a Cancel button.
      This doesn&apos;t do anything to the form but it&apos;s common to
      provide a button in a form to allow a user to cancel an edit or go back.
    </p>
    <Example
      Element={Cancel} code={CancelSrc}
      caption="Cancel"
    >
      <p>
        Don&apos;t be surprised that the Cancel button doesn&apos;t do anything
        in this example.  We need to add an <code>onClick</code> handler to
        make it useful. See the next example.
      </p>
    </Example>
    <p>
      The <code>text</code> property will set the text for the button.
      The <code>className</code> property can be used to add a CSS
      class.  The <code>onClick</code> property should be used to define
      a handler to do something when the button is clicked.
    </p>
    <Example
      Element={CancelProps} code={CancelPropsSrc}
      caption="Properties"
    />
  </div>

export default CancelExamples