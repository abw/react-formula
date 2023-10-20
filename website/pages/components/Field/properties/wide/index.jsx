import React        from 'react'
import Wide         from './examples/Wide.jsx'
import WideSrc      from './examples/Wide.jsx?raw'
import WideForm     from './examples/WideForm.jsx'
import WideFormSrc  from './examples/WideForm.jsx?raw'
import Example      from '@/site/Example.jsx'

const WideExample = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>wide</code></h2>
    <p>
      The default behaviour is for fields to be fluid in width.
      You can add the <code>wide</code> property to make it expand to
      the full width of the container.
    </p>
    <Example
      Element={Wide} code={WideSrc}
      caption="wide" expand
    />
    <p>
      If wide fields are your thing, you can add the <code>wide</code> property
      to the form and all the fields will inherit it as the default.  You can
      set <code>wide</code> to <code>false</code> if you don&apos;t want a
      particular field to be full-width.
    </p>
    <Example
      Element={WideForm} code={WideFormSrc}
      caption="wide form" expand
    />
  </div>


export default WideExample