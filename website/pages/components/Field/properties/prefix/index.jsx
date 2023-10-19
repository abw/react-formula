import React     from 'react'
import PrefixSrc from './examples/Prefix.jsx?raw'
import Prefix    from './examples/Prefix.jsx'
import Example   from '@/site/Example.jsx'
import SeeAlso   from '@/site/SeeAlso.jsx'

const PrefixExample = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>prefix</code></h2>
    <p>
      You can add a <code>prefix</code> to a <code>text</code> field or any
      of the other types using the basic text input, e.g.{' '}
      <code>money</code>, <code>date</code>, etc.
    </p>
    <Example
      Element={Prefix} code={PrefixSrc}
      caption="prefix" expand
    />
    <SeeAlso
      links={[
        'field:suffix',
      ]}
    />
  </div>


export default PrefixExample