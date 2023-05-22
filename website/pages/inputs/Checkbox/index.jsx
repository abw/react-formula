import React        from 'react'
import Example      from '../../../site/Example.jsx'
// import Pager        from '../../../site/Pager/Inputs.jsx'
import Checkbox     from './examples/Checkbox.jsx'
import CheckboxSrc  from './examples/Checkbox.jsx?raw'
import Fluid        from './examples/Fluid.jsx'
import FluidSrc     from './examples/Fluid.jsx?raw'
import Inline       from './examples/Inline.jsx'
import InlineSrc    from './examples/Inline.jsx?raw'
import Bare         from './examples/Bare.jsx'
import BareSrc      from './examples/Bare.jsx?raw'
import { FieldLink, TypeLink } from '../../../site/Links.jsx'
import { RadioInputLink } from '../../../site/Links.jsx'

const CheckboxExamples = () =>
  <div>
    <h1>Checkbox Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>checkbox</code> for a checkbox.
      Use the <code>text</code> property to define any text that you want to
      appear alongside the checkbox.  The <code>label</code> is optional on all
      fields, so depending on what your checkbox text says, you might want to
      leave it out.
    </p>
    <Example Element={Checkbox} code={CheckboxSrc} expand/>

    <h2>Fluid Checkbox Input</h2>
    <p>
      The default behaviour is for a checkbox to stretch to the full width
      of the container.  Add the <code>fluid</code> CSS class using
      the <code>className</code> property to give it a fluid width.
    </p>
    <Example Element={Fluid} code={FluidSrc} expand/>

    <h2>Inline Checkbox Input</h2>
    <p>
      Add the <code>fluid</code> CSS class for inline fields.  Note that there
      isn&apos;t any margin automatically added between inline fields.
      If you want a margin then you can add it using your own class or style
      rules, or use the <code>mar-r-option</code> utility class which adds a
      suitable margin on the right.  This is the same width as the margin
      that is added between <RadioInputLink/> options.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>

    <h2>Bare Checkbox Input</h2>
    <p>
      If boxes around checkboxes aren&apos;t your thing then the{' '}
      <code>bare</code> class will strip them naked.
    </p>
    <Example Element={Bare} code={BareSrc} expand/>
    {/* <Pager uri="checkbox"/> */}
  </div>

export default CheckboxExamples