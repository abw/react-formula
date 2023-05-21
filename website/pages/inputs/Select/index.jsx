import React      from 'react'
import Example    from '../../../site/Example.jsx'
import Select     from './examples/Select.jsx'
import SelectSrc  from './examples/Select.jsx?raw'
import Fluid      from './examples/Fluid.jsx'
import FluidSrc   from './examples/Fluid.jsx?raw'
import Inline     from './examples/Inline.jsx'
import InlineSrc  from './examples/Inline.jsx?raw'
import { FieldLink, RadioInputLink, TypeLink } from '../../../site/Links.jsx'

const SelectExamples = () =>
  <div>
    <h1>Select Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>select</code> to create a
      select input. Just like the <RadioInputLink/> input, you can specify
      the <code>options</code> as an array of simple values or objects
      containing <code>value</code> and <code>text</code> properties.
    </p>
    <Example Element={Select} code={SelectSrc} expand/>

    <h1>Fluid Select Input</h1>
    <p>
      The default behaviour is for a select input to expand to the full width
      of the container. Add the <code>fluid</code> CSS class via the{' '}
      <code>className</code>{' '} property if you would rather it didn&apos;t.
    </p>
    <Example Element={Fluid} code={FluidSrc} expand/>

    <h1>Inline Select Input</h1>
    <p>
      Add the <code>inline</code> CSS class for inline select input fields.
      There isn&apos;t any margin applied between inline fields by default
      but you can add the <code>mar-r-option</code> CSS class to have a
      margin added to the right side (or <code>mar-l-option</code> to have
      it added to the left).  This is the same width margin that is added
      between <RadioInputLink/> options.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>
  </div>

export default SelectExamples