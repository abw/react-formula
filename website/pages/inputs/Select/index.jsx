import React      from 'react'
import Example    from '../../../site/Example.jsx'
import Select     from './examples/Select.jsx'
import SelectSrc  from './examples/Select.jsx?raw'
import Inline     from './examples/Inline.jsx'
import InlineSrc  from './examples/Inline.jsx?raw'
import { FieldLink, RadioInputLink, TypeLink } from '../../../site/Links.jsx'

const SelectExamples = () =>
  <div className="prose flow">
    <h1>Select Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>select</code> to create a
      select input. Just like the <RadioInputLink/> input, you can specify
      the <code>options</code> as an array of simple values or objects
      containing <code>value</code> and <code>text</code> properties.
    </p>
    <Example Element={Select} code={SelectSrc} expand/>

    <h1>Inline Select Input</h1>
    <p>
      Select elements default to full-width block elements.
      Add the <code>inline</code> CSS class to keep them inline.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>
  </div>

export default SelectExamples