import React        from 'react'
import Example      from '../../../site/Example.jsx'
import TextArea     from './examples/TextArea.jsx'
import TextAreaSrc  from './examples/TextArea.jsx?raw'
import Inline       from './examples/Inline.jsx'
import InlineSrc    from './examples/Inline.jsx?raw'
import { FieldLink, TypeLink } from '../../../site/Links.jsx'

const TextAreaExamples = () =>
  <div className="prose flow">
    <h1>Text Area Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>textarea</code> for a text
      area input.  The optional <code>rows</code> property can be used to
      specify the number of rows.
    </p>
    <Example Element={TextArea} code={TextAreaSrc} expand/>

    <h2>Inline Text Area Input</h2>
    <p>
      By default a text area will expand to fill the width of the container.
      Add the <code>inline</code> property to give it a fluid width.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>
  </div>

export default TextAreaExamples