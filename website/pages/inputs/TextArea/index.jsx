import React        from 'react'
import Example      from '../../../site/Example.jsx'
import TextArea     from './examples/TextArea.jsx'
import TextAreaSrc  from './examples/TextArea.jsx?raw'
import Fluid        from './examples/Fluid.jsx'
import FluidSrc     from './examples/Fluid.jsx?raw'
import Inline       from './examples/Inline.jsx'
import InlineSrc    from './examples/Inline.jsx?raw'
import { FieldLink, TypeLink } from '../../../site/Links.jsx'

const TextAreaExamples = () =>
  <div>
    <h1>Text Area Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>textarea</code> for a text
      area input.  The optional <code>rows</code> property can be used to
      specify the number of rows.
    </p>
    <Example Element={TextArea} code={TextAreaSrc} expand/>

    <h2>Fluid Text Area Input</h2>
    <p>
      Add the <code>fluid</code> CSS class for a fluid width input.
    </p>
    <Example Element={Fluid} code={FluidSrc} expand/>

    <h2>Inline Text Area Input</h2>
    <p>
      Add the <code>inline</code> CSS class for inline fields.  You may
      also want to add the <code>mar-r-option</code> CSS class to add a
      margin to the right side of any fields that are followed by another
      field.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>
  </div>

export default TextAreaExamples