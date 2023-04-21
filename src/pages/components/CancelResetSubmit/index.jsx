import React                      from 'react'
import Example                    from '../../../site/Example.jsx'
import { CancelLink, ResetLink, SubmitLink } from '../../../site/Links.jsx'
import CancelResetSubmit          from './examples/CancelResetSubmit.jsx'
import CancelResetSubmitSrc       from './examples/CancelResetSubmit.jsx?raw'
import CancelResetSubmitProps     from './examples/CancelResetSubmitProps.jsx'
import CancelResetSubmitPropsSrc  from './examples/CancelResetSubmitProps.jsx?raw'

const CancelResetSubmitExamples = () =>
  <div>
    <h1>CancelResetSubmit</h1>
    <p>
      The <code>CancelResetSubmit</code> component can be used to add all
      three <CancelLink/>, <ResetLink/> and <SubmitLink/> controls in one fell
      swoop.
    </p>
    <Example
      Element={CancelResetSubmit} code={CancelResetSubmitSrc}
      caption="CancelResetSubmit"
    />
    <p>
      You can define properties for the <CancelLink/> component using
      the <code>cancel</code> property, for the <ResetLink/> component using
      the <code>reset</code> property, and for the <SubmitLink/>{' '}
      component using the <code>submit</code> property.  You can add a{' '}
      <code>className</code> property to set the CSS class of the container.
    </p>
    <Example
      Element={CancelResetSubmitProps} code={CancelResetSubmitPropsSrc}
      caption="Properties"
    />
  </div>

export default CancelResetSubmitExamples