import React      from 'react'
import SuffixSrc  from './examples/Suffix.jsx?raw'
import Suffix     from './examples/Suffix.jsx'
import BothSrc    from './examples/Both.jsx?raw'
import Both       from './examples/Both.jsx'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'

const SuffixExample = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>suffix</code></h2>
    <p>
      The <code>suffix</code> property can be used to a a suffix to a field.
      This can be text, an SVG icon or other JSX fragment.
    </p>

    <Example
      Element={Suffix} code={SuffixSrc}
      caption="suffix" expand
    />

    <p>
      The <code>suffixClass</code> property can be used to set a CSS class
      for the suffix.  Badger CSS provides two built in styles: {' '}
      <code>lined</code> to add a dividing line, and <code>shaded</code> to
      add some background shading.
    </p>
    <Example
      Element={Both} code={BothSrc}
      caption="prefix and suffix" expand
    />
    <SeeAlso
      links={[
        'field:prefix',
      ]}
    />

  </div>


export default SuffixExample