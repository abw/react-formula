import React       from 'react'
import Example     from '@/site/Example.jsx'
import Text        from './examples/Text.jsx'
import TextSrc     from './examples/Text.jsx?raw'
import Grid        from './examples/Grid.jsx'
import GridSrc     from './examples/Grid.jsx?raw'
import Inline      from './examples/Inline.jsx'
import InlineSrc   from './examples/Inline.jsx?raw'
import Variants    from './examples/Variants.jsx'
import VariantsSrc from './examples/Variants.jsx?raw'
import { FieldLink, TypeLink } from '@/site/Links.jsx'

const TextExamples = () =>
  <div className="prose flow">
    <h1>Text Input</h1>
    <p>
      The default <FieldLink/> <TypeLink/> is <code>text</code>.  You can
      specify it explicitly if you like, but it&apos;s entirely optional.
    </p>
    <Example Element={Text} code={TextSrc} expand/>

    <h2>Inline Text Input</h2>
    <p>
      The default behaviour is to make the text fields extend to the
      full width of the container.  Bitter experience has taught me that
      it&apos;s generally easier to do this and constrain the width of
      the container than it is to try and get all inputs the same width,
      especially if you&apos;re using prefix and suffix elements.
    </p>
    <p>
      You can set the <code>inline</code> property on a field if you want
      the input to have fluid width.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>

    <h2>Grid Layout</h2>
    <p>
      Another, possibly better approach, is to use CSS grids to layout
      fields.
    </p>
    <Example Element={Grid} code={GridSrc} expand/>
    {/*
      The <code>size</code> property can be set to tell
      the browser <i>approximately</i> how wide the field should be in
      terms of characters, but don&apos;t rely on it being particularly
      accurate.  In terms of usability it is generally considered to be a
      good thing to give users a visual indication of how long the input
      is expected to be.  Unfortunately I can count on no hands the number of
      times a designer has agreed that this is more important than having
      all the fields fully justified.
    </p>
    <Example Element={Fluid} code={FluidSrc} expand/>
    */}

    <h2>Number, Date and other Field Types</h2>
    <p>
      All the other variants of the basic input type are supported.  Set
      the <code>type</code> to <code>number</code> for a numerical field,{' '}
      <code>date</code> for a date selector, <code>password</code> for a
      password field, and so on.
    </p>
    <Example Element={Variants} code={VariantsSrc} expand/>
  </div>

export default TextExamples