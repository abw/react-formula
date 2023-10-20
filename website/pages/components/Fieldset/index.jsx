import React              from 'react'
import Fieldset           from './examples/Fieldset.jsx'
import FieldsetSrc        from './examples/Fieldset.jsx?raw'
import FieldsetFields     from './examples/FieldsetFields.jsx'
import FieldsetFieldsSrc  from './examples/FieldsetFields.jsx?raw'
import FieldsetClass      from './examples/FieldsetClass.jsx'
import FieldsetClassSrc   from './examples/FieldsetClass.jsx?raw'
import FieldsetCSS        from './examples/fieldset.css?raw'
import Example            from '@/site/Example.jsx'
import CodeBlock          from '@/site/CodeBlock.jsx'
import { FieldsLink }     from '@/site/Links.jsx'

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
      Element={FieldsetFields} code={FieldsetFieldsSrc}
      caption="Fieldset fields" expand
    />

    <h2><code>className</code></h2>
    <p>
      The <code>className</code> property can be used to add a CSS class to
      the fieldset container.
    </p>
    <Example
      Element={FieldsetClass}
      code={FieldsetClassSrc}
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