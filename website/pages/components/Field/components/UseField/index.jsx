import React               from 'react'
import Children            from './examples/Children.jsx'
import ChildrenSrc         from './examples/Children.jsx?raw'
import UFExample           from './examples/UFExample.jsx'
import UFExampleSrc        from './examples/UFExample.jsx?raw'
import Example             from '@/site/Example.jsx'
import { FieldChildrenLink, FieldLink, FieldLayoutLink } from '@/site/Links.jsx'

const UseFieldExamples = () =>
  <div className="prose">
    <h1>Field Components</h1>
    <h2><code>UseField</code></h2>
    <p>
      The immediate <FieldChildrenLink/> of a <FieldLink/> component can
      be functions that will receive the field context as the first argument.
    </p>
    <Example
      Element={Children}
      code={ChildrenSrc}
      caption="Field Children"
      expand
    />

    <p>
      However, this only works for the immediate children of the <FieldLink/>.
      If you want to include a function that is nested inside another element
      (e.g. inside a <code>div</code> as shown in this example) then you can
      use the <code>UseForm</code> component to provide it.
    </p>
    <p>
      Don&apos;t forget that defining any children of a <FieldLink/> component
      will override the default <FieldLayoutLink/> component, so you&apos;ll need
      to add it manually or define your own layout for the field.
    </p>
    <Example
      Element={UFExample} code={UFExampleSrc}
      caption="UseField" expand
    />
  </div>

export default UseFieldExamples