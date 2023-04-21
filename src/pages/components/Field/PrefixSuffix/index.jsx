import React               from 'react'
import Example             from '../../../../site/Example.jsx'
import PrefixSource        from './examples/Prefix.jsx?raw'
import PrefixExample       from './examples/Prefix.jsx'
import SuffixSource        from './examples/Suffix.jsx?raw'
import SuffixExample       from './examples/Suffix.jsx'
import PrefixSuffixSource  from './examples/PrefixSuffix.jsx?raw'
import PrefixSuffixExample from './examples/PrefixSuffix.jsx'

const PrefixSuffix = () =>
  <div>
    <h1>Prefix and Suffix</h1>

    <h2>prefix</h2>
    <p>
      You can add a <code>prefix</code> to a <code>text</code> field or any
      of the other types using the basic text input, e.g.{' '}
      <code>money</code>, <code>date</code>, etc.
    </p>
    <Example
      Element={PrefixExample} code={PrefixSource}
      caption="prefix"
    />

    <h2>suffix</h2>
    <p>
      You can add also add a <code>suffix</code>.
    </p>
    <Example
      Element={SuffixExample} code={SuffixSource}
      caption="suffix"
    />

    <h2>prefix and suffix</h2>
    <p>
      Or you can add both.
    </p>
    <Example
      Element={PrefixSuffixExample} code={PrefixSuffixSource}
      caption="prefix and suffix"
    />
  </div>


export default PrefixSuffix