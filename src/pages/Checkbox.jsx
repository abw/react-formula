import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Checkbox.jsx?raw'
import Element from '../examples/Checkbox.jsx'
import SourceWide from '../examples/CheckboxWide.jsx?raw'
import ElementWide from '../examples/CheckboxWide.jsx'
import SourceBare from '../examples/CheckboxBare.jsx?raw'
import ElementBare from '../examples/CheckboxBare.jsx'

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

    <Example Element={ElementWide} code={SourceWide}>
      <h2>Wide Checkbox</h2>
      <p>
        The default behaviour is for a checkbox to only take up as much room
        as is required for the text.  Add the <code className="code">wide</code>{' '}
        CSS class using the <code className="code">className</code> property
        to make it extend across the full width of the container.
      </p>
    </Example>

    <Example Element={ElementBare} code={SourceBare}>
      <h2>Bare Checkbox</h2>
      <p>
        If boxes around checkboxes aren&apos;t your thing then the{' '}
        <code className="code">bare</code> class will strip them naked.
      </p>
    </Example>

  </div>

export default Checkbox