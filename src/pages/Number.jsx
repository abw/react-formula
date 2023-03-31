import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Number.jsx?raw'
import Element from '../examples/Number.jsx'

const Number = () =>
  <div>
    <h1>Number, Date and other Field Types</h1>
    <Example Element={Element} code={Source}>
      All the other variants of the basic input type are supported.  Set
      the <code className="code">type</code> to <code className="code">number</code>{' '},
      for a numerical field, <code className="code">date</code> for a date
      selector, <code className="code">password</code> for a password field,
      and so on.
    </Example>
  </div>

export default Number