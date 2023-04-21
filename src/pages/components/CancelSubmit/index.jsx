import React                from 'react'
import Example              from '../../../site/Example.jsx'
import Link                 from '../../../site/Link.jsx'
import CancelSubmit         from './examples/CancelSubmit.jsx'
import CancelSubmitSrc      from './examples/CancelSubmit.jsx?raw'
import CancelSubmitProps    from './examples/CancelSubmitProps.jsx'
import CancelSubmitPropsSrc from './examples/CancelSubmitProps.jsx?raw'

const CancelSubmitExamples = () =>
  <div>
    <h1>CancelSubmit</h1>
    <p>
      The <code>CancelSubmit</code> component can be used to add both{' '}
      <Link to="/components/cancel" text="Cancel"/> and{' '}
      <Link to="/components/submit" text="Submit"/> controls in one fell
      swoop.
    </p>
    <Example
      Element={CancelSubmit} code={CancelSubmitSrc}
      caption="CancelSubmit"
    />
    <p>
      You can define properties for the <code>Cancel</code> component using
      the <code>cancel</code> property, and for the <code>Submit</code>{' '}
      component using the <code>submit</code> property.  You can add a{' '}
      <code>className</code> property to set the CSS class of the container.
    </p>
    <Example
      Element={CancelSubmitProps} code={CancelSubmitPropsSrc}
      caption="Properties"
    />
  </div>

export default CancelSubmitExamples