import React from 'react'
import Example from '../../site/Example.jsx'
import Source from '../examples/Fields.jsx?raw'
import Element from '../../examples/Fields.jsx'

const Fields = () =>
  <div>
    <h1>Inserting Multiple Fields</h1>
    <Example Element={Element} code={Source}>
      <p>
        There are a number of benefits to defining a separate schema for your
        form fields.  For one, it means that all your field definitions are
        in a single place where you can easily inspect and edit them without
        having to wade through lots of markup.  It also means that your form
        markup remains free of all the functional code, allowing you to
        concentrate on layout, styling and other presentational aspects.
        If you decide to split a long form into multiple parts, change the
        order of some fields, or perhaps display some fields side-by-side
        instead of stacked vertically, then it&apos;s easier to move a single{' '}
        <code className="code">Field</code> element around, or just edit the {' '}
        <code className="code">name</code> property than it is to cut and paste
        large blocks of code.
      </p>
      <p>
        When you are displaying a list of fields like this you can use the{' '}
        <code className="code">Fields</code> component as a short-cut.  Instead
        of providing a single <code className="code">name</code>, give it a
        list of <code className="code">names</code>, either as an array of
        strings, or a single string containing a whitespace-delimited list of
        field names.  The <code className="code">Fields</code> component
        renders each of the fields, collected together in a single{' '}
        <code className="code">div</code> element
      </p>
    </Example>
  </div>

export default Fields