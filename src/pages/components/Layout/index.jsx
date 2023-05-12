import React               from 'react'
import Example             from '../../../site/Example.jsx'
import Layout              from './Layout.jsx'
import LayoutSrc           from './Layout.jsx?raw'
import LayoutContent       from './LayoutContent.jsx'
import LayoutContentSrc    from './LayoutContent.jsx?raw'
import { FieldLink, LabelLink, MessageLink, TypeLink } from '../../../site/Links.jsx'
import Link from '../../../site/Link.jsx'

const LayoutExamples = () =>
  <div>
    <h1>Layout</h1>
    <p>
      The <code>Layout</code> component provides the default content for a{' '}
      <FieldLink/>.  It renders a <code>div</code> with the <code>field</code>{' '}
      CSS class and any other classes relevant to the state of the field
      (e.g. <code>focus</code>, <code>valid</code> and/or <code>invalid</code>).
    </p>
    <p>
      If you&apos;re defining your own field content and want to include all
      the usual elements then you can manually include it in a <FieldLink/>.
    </p>
    <Example
      Element={Layout} code={LayoutSrc}
      caption="Layout"
    />
    <p>
      The <code>Layout</code> component renders a <LabelLink/>, one of the
      relevant <Link to="/inputs" text="input type components"/> based on
      the <TypeLink/> of the field, and the <MessageLink/> component.
    </p>
    <p>
      You can manually include these inside a <FieldLink/> and intersperse
      them with your own content.
    </p>
    <Example
      Element={LayoutContent} code={LayoutContentSrc}
      caption="Layout Content"
    />
  </div>

export default LayoutExamples