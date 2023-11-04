import React        from 'react'
import Example      from '../../../site/Example.jsx'
import Options      from './examples/Options.jsx'
import OptionsSrc       from './examples/Options.jsx?raw'
import Simple           from './examples/Simple.jsx'
import SimpleSrc        from './examples/Simple.jsx?raw'
import Inline           from './examples/Inline.jsx'
import InlineSrc        from './examples/Inline.jsx?raw'
import Border           from './examples/Border.jsx'
import BorderSrc        from './examples/Border.jsx?raw'
import OptionsClass     from './examples/OptionsClass.jsx'
import OptionsClassSrc  from './examples/OptionsClass.jsx?raw'
import OptionClass      from './examples/OptionClass.jsx'
import OptionClassSrc   from './examples/OptionClass.jsx?raw'
import InputClass       from './examples/InputClass.jsx'
import InputClassSrc    from './examples/InputClass.jsx?raw'
import { FieldLink, TypeLink } from '../../../site/Links.jsx'

const RadioExamples = () =>
  <div className="prose">
    <h1>Radio Button Input</h1>
    <p>
      Set the <FieldLink/> <TypeLink/> to <code>radio</code> to create a radio
      button set. The <code>options</code> property should be used to define
      the options. This should be an array of objects containing{' '}
      <code>value</code> and <code>text</code>{' '} properties.
    </p>
    <p>
      You can also add <code>className</code> if you want to add a particular
      class to an option.  Or for more complex markup, define the{' '}
      <code>text</code> as a JSX snippet.
    </p>
    <Example Element={Options} code={OptionsSrc} expand/>

    <p>
      In simple cases where the value and text are the same then you can
      define <code>options</code> as an array of values.
    </p>
    <Example Element={Simple} code={SimpleSrc} expand/>

    <h2><code>inline</code></h2>
    <p>
      The default behaviour is for radio button options to be displayed
      as blocks that extend to the full width of the container.  Add the
      <code>inline</code> property to keep them inline.
    </p>
    <Example Element={Inline} code={InlineSrc} expand/>


    <h2><code>border</code></h2>
    <p>
      Add the <code>border</code> CSS class to have the options inline.
      Note that margins aren&apos;t automatically added between option,
      but you can use the <code>optionClass</code> and/or{' '}
      <code>optionsClass</code> properties, described below, to add them.
    </p>
    <Example Element={Border} code={BorderSrc} expand/>

    <h2><code>optionsClass</code></h2>
    <p>
      The <code>optionsClass</code> property (note plural) can be used to
      add a CSS class to the options container.  This is useful for adding
      gaps between options, or if you want to display the options in a grid,
      for example.
    </p>
    <Example Element={OptionsClass} code={OptionsClassSrc} expand/>

    <h2><code>optionClass</code></h2>
    <p>
      The <code>optionClass</code> property (note singular) can be used to
      add a CSS class to each of the options.  This is useful if you want to
      add margins to options, for example.
    </p>
    <Example Element={OptionClass} code={OptionClassSrc} expand/>

    <h2><code>inputClass</code></h2>
    <p>
      The <code>inputClass</code> property can be used to add a CSS class to
      the radio input.
    </p>
    <Example Element={InputClass} code={InputClassSrc} expand/>


  </div>

export default RadioExamples