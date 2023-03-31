import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Checkbox.jsx?raw'
import Element from '../examples/Checkbox.jsx'

const Checkbox = () =>
  <div>
    <h1>Checkbox Fields</h1>
    <Example Element={Element} code={Source}/>
  </div>

export default Checkbox