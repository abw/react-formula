import React          from 'react'
import Fieldset       from './examples/Fieldset.jsx'
import FieldsetSrc    from './examples/Fieldset.jsx?raw'
import Fields         from './examples/Fields.jsx'
import FieldsSrc      from './examples/Fields.jsx?raw'
import Class          from './examples/Class.jsx'
import ClassSrc       from './examples/Class.jsx?raw'
import Grid           from './examples/Grid.jsx'
import GridSrc        from './examples/Grid.jsx?raw'
import Example        from '@/site/Example.jsx'
import FieldsetCSS    from './examples/fieldset.css?raw'
import CodeBlock      from '@/site/CodeBlock.jsx'
import { FieldsLink } from '@/site/Links.jsx'

const FieldsetExamples = () =>
  <div className="prose">
    <h1>Fieldset</h1>
    <p>
      The <code>Fieldset</code> component can be used to create a field
      set.  The <code>legend</code> property should be used to set the
      legend.
    </p>
    <Example
      Element={Fieldset} code={FieldsetSrc}
      caption="Fieldset" expand
    />

    <h2><code>fields</code></h2>
    <p>
      The <code>fields</code> property can be used as
      a shortcut to render a set of named fields using the{' '}
      <FieldsLink/> component.
    </p>
    <Example
      Element={Fields} code={FieldsSrc}
      caption="Fieldset fields" expand
    />

    <h2><code>grid</code>, <code>gap</code> and <code>stack</code></h2>
    <p>
      Any other properties are forwarded onto the <FieldsLink/> component.
      For example, you can set the <code>grid</code>, <code>gap</code> and{' '}
      <code>stack</code> properties to set the layout to implement a grid
      layout.
    </p>
    <Example
      Element={Grid}
      code={GridSrc}
      caption="Fieldset Grid" expand
    />

    <h2><code>className</code></h2>
    <p>
      The <code>className</code> property can be used to add a CSS class to
      the fieldset container.
    </p>
    <Example
      Element={Class}
      code={ClassSrc}
      caption="Fieldset className" expand
    />

    <h2>Additional Styles</h2>
    <p>
      For completeness, here&apos;s the additional CSS we&apos;re using to
      apply the styling in the above example.
    </p>
    <CodeBlock
      code={FieldsetCSS}
      caption="fieldset.scss"
      language="css"
      expand
    />

  </div>

export default FieldsetExamples