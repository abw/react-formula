import React from 'react'
import { FieldMenu } from '../../../site/Menus.jsx'
import { FormLink } from '../../../site/Links.jsx'
import Example from '../../../site/Example.jsx'
import ExampleSrc       from './Example.jsx?raw'
import ExampleElement   from './Example.jsx'
import TOC from '../../../site/TOC.jsx'

const Home = () =>
  <>
    <h1>Field Component</h1>
    <p className="intro">
      The <code>Field</code> component is used to render a field inside
      a <FormLink/>.
    </p>
    <Example
      Element={ExampleElement} code={ExampleSrc}
      caption="Field"
    />
    <TOC menu={FieldMenu}/>
  </>

export default Home