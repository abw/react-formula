import React               from 'react'
import Example             from '../../../site/Example.jsx'
import UFExample           from './UFExample.jsx'
import UFExampleSrc        from './UFExample.jsx?raw'
import { FieldChildrenLink, FieldLink, LayoutLink } from '../../../site/Links.jsx'
// import { FieldLink, LabelLink, MessageLink, TypeLink } from '../../../site/Links.jsx'
// import Link from '../../../site/Link.jsx'

const UseFieldExamples = () =>
  <div>
    <h1>UseField</h1>
    <p>
      The immediate <FieldChildrenLink/> of a <FieldLink/> component can
      be functions that will receive the field context as the first argument.
    </p>
    <p>
      However, this only works for the immediate children of the <FieldLink/>.
      If you want to include a function that is nested inside another element
      (e.g. inside a <code>div</code> as shown in this example) then you can
      use the <code>UseForm</code> component to provide it.
    </p>
    <p>
      Don&apos;t forget that defining any children of a <FieldLink/> component
      will override the default <LayoutLink/> component, so you&apos;ll need
      to add it manually or define your own layout for the field.
    </p>
    <Example
      Element={UFExample} code={UFExampleSrc}
      caption="UseField" expand
    />
  </div>

export default UseFieldExamples