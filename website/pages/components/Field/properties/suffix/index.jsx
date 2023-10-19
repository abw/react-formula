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
      You can add a <code>suffix</code> to a field
    </p>
    <Example
      Element={Suffix} code={SuffixSrc}
      caption="suffix" expand
    />

    <p>
      You can add both a <code>prefix</code> and a <code>suffix</code>.
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