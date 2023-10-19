import React              from 'react'
import Layout             from './Layout.jsx'
import LayoutSrc          from './Layout.jsx?raw'
import LayoutContent      from './LayoutContent.jsx'
import LayoutContentSrc   from './LayoutContent.jsx?raw'
import Example            from '@/site/Example.jsx'
import Link               from '@/site/Link.jsx'
import { FieldLayoutLink, FieldLink, LabelLink, MessageLink, TypeLink } from '@/site/Links.jsx'

const LayoutExamples = () =>
  <div className="prose">
    <h1>Field Components</h1>

    <div className="alert error border">
      NOTE: this page is probably redundant as it&apos;s been replaced by
      the Field <FieldLayoutLink/> page.
    </div>

    <p>
      The <code>Layout</code> component provides the default content for a{' '}
      <FieldLink/>.
    </p>

    <p>
      If you&apos;re defining your own field content and want to include all
      the usual elements then you can manually include it in a <FieldLink/>.
    </p>
    <Example
      Element={Layout} code={LayoutSrc}
      caption="Layout" expand
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
      caption="Layout Content" expand
    />
  </div>

export default LayoutExamples