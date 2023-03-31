import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Complete.jsx?raw'
import Element from '../examples/Complete.jsx'

const Complete = () =>
  <div>
    <h1>Complete Form Example</h1>
    <Example Element={Element} code={Source}>
      <p>
        This is a more complete example.
      </p>
    </Example>
  </div>

export default Complete