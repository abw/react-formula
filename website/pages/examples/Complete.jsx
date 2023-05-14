import React from 'react'
import Example from '../../site/Example.jsx'
import Source from '../../examples/Complete.jsx?raw'
import Element from '../../examples/Complete.jsx'

const Complete = () =>
  <div>
    <h1>Complete Form Example</h1>
    <p>
      This is a more complete example.
    </p>
    <Example Element={Element} code={Source}/>
  </div>

export default Complete