import React          from 'react'
import Example        from '../../../site/Example.jsx'
import Checkbox       from './examples/Checkbox.jsx'
import CheckboxSrc    from './examples/Checkbox.jsx?raw'
import Border         from './examples/Border.jsx'
import BorderSrc      from './examples/Border.jsx?raw'
import Wide           from './examples/Wide.jsx'
import WideSrc        from './examples/Wide.jsx?raw'
import InputClass     from './examples/InputClass.jsx'
import InputClassSrc  from './examples/InputClass.jsx?raw'
import { FieldLink, TypeLink } from '../../../site/Links.jsx'

const CheckboxExamples = () =>
  <div className="prose">
    <h1>Checkbox Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>checkbox</code> for a checkbox.
      Use the <code>text</code> property to define any text that you want to
      appear alongside the checkbox.  The <code>label</code> is optional on all
      fields, so depending on what your checkbox text says, you might want to
      leave it out.
    </p>
    <Example Element={Checkbox} code={CheckboxSrc} expand/>

    <h2><code>border</code></h2>
    <p>
      Add the <code>border</code> property if you want a border around the
      checkbox item.
    </p>
    <Example Element={Border} code={BorderSrc} expand/>

    <h2><code>wide</code></h2>
    <p>
      The default behaviour is for checkboxes to be displayed
      inline.  Add the <code>wide</code> property to make them expand to
      the full width of the container.
    </p>
    <Example Element={Wide} code={WideSrc} expand/>

    <h2><code>inputClass</code></h2>
    <p>
      The <code>inputClass</code> property can be used to add a CSS class
      to the checkbox input.
    </p>
    <Example Element={InputClass} code={InputClassSrc} expand/>

  </div>

export default CheckboxExamples