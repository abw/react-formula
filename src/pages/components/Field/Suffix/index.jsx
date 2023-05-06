import React      from 'react'
import Example    from '../../../../site/Example.jsx'
import SuffixSrc  from './Suffix.jsx?raw'
import Suffix     from './Suffix.jsx'
import BothSrc    from './Both.jsx?raw'
import Both       from './Both.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const PrefixSuffix = () =>
  <div>
    <h1>Field Properties</h1>

    <h2><code>suffix</code></h2>
    <p>
      You can add add a <code>suffix</code> to a field
    </p>
    <Example
      Element={Suffix} code={SuffixSrc}
      caption="suffix"
    />

    <p>
      You can add both a <code>prefix</code> and a <code>suffix</code>.
    </p>
    <Example
      Element={Both} code={BothSrc}
      caption="prefix and suffix"
    />
    <SeeAlso
      links={[
        'field:prefix',
      ]}
    />

  </div>


export default PrefixSuffix