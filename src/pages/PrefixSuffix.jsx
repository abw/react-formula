import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/PrefixSuffix.jsx?raw'
import Element from '../examples/PrefixSuffix.jsx'

const PrefixSuffix = () =>
  <div>
    <h1>Prefix and Suffix</h1>
    <Example Element={Element} code={Source}>
      <p>
        You can add a <code className="code">prefix</code> and/or{' '}
        <code className="code">suffix</code> to a{' '}
        <code className="code">text</code> field or any of the
        other types using the basic text input, e.g.{' '}
        <code className="code">money</code>, <code className="code">date</code>, etc.
      </p>
    </Example>
  </div>

export default PrefixSuffix