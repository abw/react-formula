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
      <code>money</code>, <code>date</code>, etc.  The prefix can be text,
      an SVG icon or any other JSX fragment.
    </p>
    <p>
      The <code>prefixClass</code> property can be used to set a CSS class
      for the prefix.  Badger CSS provides two built in styles: {' '}
      <code>lined</code> to add a dividing line, and <code>shaded</code> to
      add some background shading.
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