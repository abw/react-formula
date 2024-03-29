import React          from 'react'
import PlaceholderSrc from './examples/Placeholder.jsx?raw'
import Placeholder    from './examples/Placeholder.jsx'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'

const PlaceholderExamples = () =>
  <div>
    <h1>Field Properties</h1>

    <h2><code>placeholder</code></h2>
    <p>
      Use the <code>placeholder</code> property to add some text as a
      placeholder in the input.
    </p>
    <Example
      Element={Placeholder} code={PlaceholderSrc}
      caption="placeholder" expand
    />
    <SeeAlso
      links={[
        'field:name',
        'form:fields',
      ]}
    />
  </div>


export default PlaceholderExamples