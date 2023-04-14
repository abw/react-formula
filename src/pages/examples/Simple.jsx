import React from 'react'
import Example from '../../site/Example.jsx'
import Source from '../examples/Simple.jsx?raw'
import Element from '../../examples/Simple.jsx'

const Simple = () =>
  <div>
    <h1>Simple Form Example</h1>
    <Example Element={Element} code={Source}>
      <p>
        This simple example demonstrates the core functionality.  At this
        level it&apos;s similar to defining a regular HTML form but using React
        components instead of native elements.  It&apos;s like they&apos;re
        friends, but with benefits.  For example, note how easy it is to define
        a simple list of options for the <code className="code">radio</code>{' '}
        and <code className="code">select</code> type inputs.
      </p>
      <p>
        The <code className="code">Debug</code> component can be used to
        inspect the current state of the form values.
      </p>
    </Example>
  </div>

export default Simple