import React        from 'react'
import Example      from '../../../site/Example.jsx'
import Radio        from './examples/Radio.jsx'
import RadioSrc     from './examples/Radio.jsx?raw'
import Fluid        from './examples/Fluid.jsx'
import FluidSrc     from './examples/Fluid.jsx?raw'
import Inline       from './examples/Inline.jsx'
import InlineSrc    from './examples/Inline.jsx?raw'
import Bare         from './examples/Bare.jsx'
import BareSrc      from './examples/Bare.jsx?raw'
import { FieldLink, TypeLink } from '../../../site/Links.jsx'

const RadioExamples = () =>
  <div>
    <h1>Radio Button Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>radio</code> to create a radio
      button set. The <code>options</code> property should be used to define
      the options. In simple cases where the value and text are the same then
      you only need to provide an array of values.  Otherwise, provide an
      array of objects containing <code>value</code> and <code>text</code>{' '}
      properties.
    </p>
    <p>
      You can also add <code>className</code> if you want to add a particular
      class to an option.  Or for more complex markup, define the{' '}
      <code>text</code> as a JSX snippet.
    </p>
    <Example Element={Radio} code={RadioSrc} expand/>

    <h2>Fluid Radio Button Input</h2>
    <p>
      The default behaviour is for radio button options to expand to the
      full width of the container.  Add the <code>fluid</code> CSS class
      using the <code>className</code> property to give them fluid width.
    </p>
    <Example Element={Fluid} code={FluidSrc} expand/>

    <h2>Inline Radio Button Input</h2>
    <p>
      Add the <code>inline</code> CSS class to have the options inline.
      Note that a margin is added between each option, but there isn&apos;t
      any margin applied to the right side of the field.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>

    <h2>Bare Radio Button Input</h2>
    <p>
      If you don&apos;t like the &quot;boxy&quot; look then add the{' '}
      <code>bare</code> class to remove the border and
      background.  The focus ring will still appear when the input is
      focussed.
    </p>
    <Example Element={Bare} code={BareSrc} expand/>

  </div>

export default RadioExamples