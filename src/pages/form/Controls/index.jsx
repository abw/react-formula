import React           from 'react'
import Example         from '../../../site/Example.jsx'
import Link            from '../../../site/Link.jsx'
import ResetSubmit     from './examples/ResetSubmit.jsx'
import ResetSubmitSrc  from './examples/ResetSubmit.jsx?raw'
import CancelSubmit    from './examples/CancelSubmit.jsx'
import CancelSubmitSrc from './examples/CancelSubmit.jsx?raw'
import ResetSubmitProps    from './examples/ResetSubmitProps.jsx'
import ResetSubmitPropsSrc from './examples/ResetSubmitProps.jsx?raw'
import CancelSubmitProps    from './examples/CancelSubmitProps.jsx'
import CancelSubmitPropsSrc from './examples/CancelSubmitProps.jsx?raw'

const Controls = () =>
  <div>
    <h1>Controls</h1>

    <h2>ResetSubmit</h2>
    <p>
      The <code>ResetSubmit</code> component can be used to add both{' '}
      <Link to="reset" text="Reset"/> and <Link to="submit" text="Submit"/>{' '}
      controls.
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

    <h2>CancelSubmit</h2>
    <p>
      The <code>CancelSubmit</code> component can be used to add both{' '}
      <Link to="cancel" text="Cancel"/> and <Link to="submit" text="Submit"/>{' '}
      controls.
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

export default Controls