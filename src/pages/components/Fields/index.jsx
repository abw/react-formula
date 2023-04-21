import React      from 'react'
import Example    from '../../../site/Example.jsx'
import Fields     from './examples/Fields.jsx'
import FieldsSrc  from './examples/Fields.jsx?raw'

const FieldsExamples = () =>
  <div>
    <h1>Fields</h1>
    <p>
      The <code>Fields</code> component can be used to render multiple
      fields.
    </p>
    <p>
      This is a shortcut for convenience, but it depends on you having all
      your form fields defined in a separate schema so you can reference them
      only by name.
    </p>
    <p>
      The <code className="code">names</code> property should be used to
      specify the list of field names either as an array of strings, or a
      single string containing a whitespace-delimited list of field names.
      The <code className="code">Fields</code> component
      renders each of the fields, collected together in a single{' '}
      <code className="code">div</code> element
    </p>
    <Example
      Element={Fields} code={FieldsSrc}
      caption="Fields"
    >
    </Example>
  </div>

export default FieldsExamples