import React                from 'react'
import Example              from '../../../site/Example.jsx'
import Link                 from '../../../site/Link.jsx'
import ResetSubmit          from './examples/ResetSubmit.jsx'
import ResetSubmitSrc       from './examples/ResetSubmit.jsx?raw'
import ResetSubmitProps     from './examples/ResetSubmitProps.jsx'
import ResetSubmitPropsSrc  from './examples/ResetSubmitProps.jsx?raw'

const CancelSubmitExamples = () =>
  <div>
    <h1>ResetSubmit</h1>
    <p>
      The <code>ResetSubmit</code> component can be used to add both{' '}
      <Link to="/components/reset" text="Reset"/> and{' '}
      <Link to="/components/submit" text="Submit"/> controls.
    </p>
    <Example
      Element={ResetSubmit} code={ResetSubmitSrc}
      caption="ResetSubmit"
    />
    <p>
      You can define properties for the <code>Reset</code> component using
      the <code>reset</code> property, and for the <code>Submit</code>{' '}
      component using the <code>submit</code> property.  You can add a{' '}
      <code>className</code> property to set the CSS class of the container.
    </p>
    <Example
      Element={ResetSubmitProps} code={ResetSubmitPropsSrc}
      caption="Properties"
    />
  </div>

export default CancelSubmitExamples