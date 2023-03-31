import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Schema.jsx?raw'
import Element from '../examples/Schema.jsx'

const Schema = () =>
  <div>
    <h1>External Form Schema</h1>
    <Example Element={Element} code={Source}>
      <p>
        This example shows how you can define a separate schema for your
        form fields.  Pass the field definitions to the{' '}
        <code className="code">Form</code> component as the{' '}
        <code className="code">fields</code> property.  When you insert a{' '}
        <code className="code">Field</code> the <code className="code">name</code> is
        used to lookup the default properties for the field.  These are only
        the defaults - you can over-ride any property in the{' '}
        <code className="code">Field</code> component, as shown below where
        we provide a different <code className="code">label</code> for the{' '}
        <code className="code">animal</code> field.
      </p>
      <p>
        You don&apos;t have to use all the <code className="code">fields</code>{' '}
        that you&apos;ve defined.  If you like you can define a single set
        of fields for all the different kinds of fields you might want to use
        in your whole web site and pass that to every form.  Only those that
        are referenced through a <code className="code">Field</code> component
        will be included.
      </p>
    </Example>
  </div>

export default Schema