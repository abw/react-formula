import React                from 'react'
import Example              from '../../../site/Example.jsx'
import ResetSubmit          from './examples/ResetSubmit.jsx'
import ResetSubmitSrc       from './examples/ResetSubmit.jsx?raw'
import ResetSubmitProps     from './examples/ResetSubmitProps.jsx'
import ResetSubmitPropsSrc  from './examples/ResetSubmitProps.jsx?raw'
import { ResetLink, SubmitLink } from '../../../site/Links.jsx'

const CancelSubmitExamples = () =>
  <div>
    <h1>ResetSubmit</h1>
    <p>
      The <code>ResetSubmit</code> component can be used to add both{' '}
      <ResetLink/> and <SubmitLink/> controls.
    </p>
    <Example
      Element={ResetSubmit} code={ResetSubmitSrc}
      caption="ResetSubmit" expand
    />
    <p>
      You can define properties for the <ResetLink/> component using
      the <code>reset</code> property, and for the <SubmitLink/>{' '}
      component using the <code>submit</code> property.  You can add a{' '}
      <code>className</code> property to set the CSS class of the container.
    </p>
    <Example
      Element={ResetSubmitProps} code={ResetSubmitPropsSrc}
      caption="Properties" expand
    />
  </div>

export default CancelSubmitExamples