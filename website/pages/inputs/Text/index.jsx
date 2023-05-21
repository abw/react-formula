import React       from 'react'
import Example     from '../../../site/Example.jsx'
import Text        from './examples/Text.jsx'
import TextSrc     from './examples/Text.jsx?raw'
import Fluid       from './examples/Fluid.jsx'
import FluidSrc    from './examples/Fluid.jsx?raw'
import Inline      from './examples/Inline.jsx'
import InlineSrc   from './examples/Inline.jsx?raw'
import Variants    from './examples/Variants.jsx'
import VariantsSrc from './examples/Variants.jsx?raw'
import { CSSVarsLink, FieldLink, RadioInputLink, TypeLink } from '../../../site/Links.jsx'

const TextExamples = () =>
  <div>
    <h1>Text Input</h1>
    <p>
      The default <FieldLink/> <TypeLink/> is <code>text</code>.  You can
      specify it explicitly if you like, but it&apos;s entirely optional.
    </p>
    <Example Element={Text} code={TextSrc} expand/>

    <h2>Fluid Text Input</h2>
    <p>
      The default behaviour is to make the text fields extend to the
      full width of the container.  Bitter experience has taught me that
      it&apos;s generally easier to do this and constrain the width of
      the container than it is to try and get all inputs the same width,
      especially if you&apos;re using prefix and suffix elements.
      You can add the <code>fluid</code> CSS class via the{' '}
      <code>className</code> property if you want a fluid width input.
    </p>
    <p>
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

    <h2>Inline Text Input</h2>
    <p>
      Add the <code>inline</code> CSS class for inline fields.  Note that
      there isn&apos;t any margin automatically added between successive
      inline fields.  You can add a margin using your own CSS class or
      inline style rules, or use the provided <code>mar-r-option</code>{' '}
      utility class to add a margin to the right of a field.  There&apos;s
      also the <code>mar-l-option</code> class for adding a margin to the left.
    </p>
    <p>
      These utility classes are so named because it&apos;s the same margin
      width that is automatically added between options in the{' '}
      <RadioInputLink/> input type.  The default value is <code>1rem</code>.
      You can redefine it using the <code>--option-margin</code> CSS variable.
      See <CSSVarsLink/> for further information.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>

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