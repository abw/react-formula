import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/PrepareValue.jsx?raw'
import Element from '../examples/PrepareValue.jsx'

const PrepareValue = () =>
  <div>
    <h1>Preparing Values</h1>
    <Example Element={Element} code={Source}>
      <p>
        You can add a <code className="code">prepareValue</code> function to
        a field to prepare the value before it&apos;s set.
      </p>
    </Example>
  </div>

export default PrepareValue