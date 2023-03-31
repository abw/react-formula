import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Checkbox.jsx?raw'
import Element from '../examples/Checkbox.jsx'

const Checkbox = () =>
  <div>
    <h1>Checkbox Fields</h1>
    <Example Element={Element} code={Source}>
      <p>
        Set the <code className="code">type</code> to{' '}
        <code className="code">checkbox</code> for a checkbox.  Use the
        <code className="code">text</code> property to define any text
        that you want to appear alongside the checkbox.  The{' '}
        <code className="code">label</code> is optional on all fields,
        so depending on what your checkbox text says, you might want to
        leave it out.
      </p>
    </Example>
  </div>

export default Checkbox