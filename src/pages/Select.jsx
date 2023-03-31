import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Select.jsx?raw'
import Element from '../examples/Select.jsx'

const Select = () =>
  <div>
    <h1>Select Fields</h1>
    <Example Element={Element} code={Source}>
      <p>
        Set the <code className="code">type</code> to{' '}
        <code className="code">select</code> to create a select input.
        Just like the <a href="radio">radio</a> field, you can specify
        the <code className="code">options</code> as an array of simple values
        or objects containing{' '}
        <code className="code">value</code> and <code className="code">text</code>{' '}
        properties.
      </p>
    </Example>

  </div>

export default Select