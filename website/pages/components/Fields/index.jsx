import React      from 'react'
import Example    from '../../../site/Example.jsx'
import Fields     from './examples/Fields.jsx'
import FieldsSrc  from './examples/Fields.jsx?raw'
import FieldsGrid    from './examples/FieldsGrid.jsx'
import FieldsGridSrc from './examples/FieldsGrid.jsx?raw'
import FieldsAuto    from './examples/FieldsGridAuto.jsx'
import FieldsAutoSrc from './examples/FieldsGridAuto.jsx?raw'
import FieldsGap     from './examples/FieldsGap.jsx'
import FieldsGapSrc  from './examples/FieldsGap.jsx?raw'
import FieldsClass     from './examples/FieldsClass.jsx'
import FieldsClassSrc  from './examples/FieldsClass.jsx?raw'
import FieldsWide    from './examples/FieldsWide.jsx'
import FieldsWideSrc from './examples/FieldsWide.jsx?raw'
import { FieldLink } from '../../../site/Links.jsx'

const FieldsExamples = () =>
  <div className="prose">
    <h1>Fields</h1>
    <p>
      The <code>Fields</code> component can be used to render multiple
      fields.
    </p>
    <p>
      This is a shortcut for convenience, but it depends on you having all
      your form fields defined in a separate schema so you can reference them
      only by name.
    </p>
    <p>
      The <code className="code">names</code> property should be used to
      specify the list of field names either as an array of strings, or a
      single string containing a whitespace-delimited list of field names.
      The <code className="code">Fields</code> component
      renders each of the fields, collected together in a single{' '}
      <code className="code">div</code> element
    </p>
    <Example
      Element={Fields}
      code={FieldsSrc}
      caption="Fields"
    />

    <h2><code>className</code></h2>
    <p>
      The <code>className</code> property can be set to add a CSS class to
      the fields container.
    </p>
    <Example
      Element={FieldsClass}
      code={FieldsClassSrc}
      caption="Fields Class"
    />

    <h2><code>grid</code></h2>
    <p>
      The <code>grid</code> property can be used to layout the fields in
      a grid.  Set the property to the number of columns you want.  The
      default gap between the fields will be 1rem (using the{' '}
      <code>gap-h-4</code> utility class provided by{' '}
      <a href="https://abw.github.io/badger-css/utilities/grid">Badger-CSS</a>).
    </p>
    <Example
      Element={FieldsGrid}
      code={FieldsGridSrc}
      caption="Fields in a Grid"
    />
    <p>
      You can also specify <code>grid</code> as the boolean value{' '}
      <code>true</code> (which React will conveniently set for you if you
      include it as a valueless property) and it will automatically select
      the correct number of columns based on how many fields it is
      rendering.
    </p>
    <Example
      Element={FieldsAuto}
      code={FieldsAutoSrc}
      caption="Automatic Grid Columns"
    />

    <h2><code>gap</code></h2>
    <p>
      The <code>gap</code> property can be used to set a custom horizontal
      gap between fields.  The value should be an integer number of margin
      units of 0.25rem.
    </p>
    <Example
      Element={FieldsGap}
      code={FieldsGapSrc}
      caption="Fields With a Gap"
    />

    <h2>Additional Properties</h2>
    <p>
      Any additional properties that you pass to the <code>Fields</code> component
      will be forwarded to each of the <FieldLink/> components.
    </p>
    <p>
      For example, if you want all your fields to expand to the full width
      of the container you can pass the <code>wide</code> property and it
      will forward it to each of the <FieldLink/> components.
    </p>
    <Example
      Element={FieldsWide}
      code={FieldsWideSrc}
      caption="Wide Fields"
    />
  </div>

export default FieldsExamples