import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Text.jsx?raw'
import Element from '../examples/Text.jsx'

const Text = () =>
  <div>
    <h1>Text Fields</h1>
    <Example Element={Element} code={Source}>
      <p>
        The <code className="code">Form</code> component is used to create
        a form wrapper.  Inside that the <code className="code">Field</code>{' '}
        component is used to define a field.  The only property required
        is <code className="code">name</code>.
      </p>
      <p>
        The default field <code className="code">type</code> is{' '}
        <code className="code">text</code> so it&apos;s optional in these
        examples.  You can provide a <code className="code">label</code>{' '}
        and/or <code className="code">placeholder</code> text.  Both are
        also optional.
      </p>
    </Example>
  </div>

export default Text