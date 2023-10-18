import React    from 'react'
import Example  from '../../../../site/Example.jsx'
import WideSrc  from './Wide.jsx?raw'
import Wide     from './Wide.jsx'
// import SeeAlso  from '../../../../site/SeeAlso.jsx'

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
  </div>


export default WideExample