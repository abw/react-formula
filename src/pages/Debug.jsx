import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Debug.jsx?raw'
import Element from '../examples/Debug.jsx'

const Debug = () =>
  <div>
    <h1>Debugging</h1>
    <Example Element={Element} code={Source}>
      <p>
        The <code className="code">Debug</code> component can be used in
        development to debug your form.  By default it displays the form
        values.  You can enable or disable this explicitly with the{' '}
        <code className="code">showValues</code> property.  You can also
        set the <code className="code">showForm</code> property to enable
        display of the form data.
      </p>
    </Example>
  </div>

export default Debug