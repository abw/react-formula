import React          from 'react'
import TOC            from '@/site/TOC.jsx'
import Example        from '@/site/Example.jsx'
import ExampleSrc     from './Example.jsx?raw'
import ExampleElement from './Example.jsx'
import { FormMenu }   from '@/site/Menus.jsx'
import { FieldLink, SubmitLink } from '@/site/Links.jsx'
const Home = () =>
  <div>
    <h1>Form</h1>
    <p>
      The <code>Form</code> component is used to render a form.
      Inside the form you will typically have one or more{' '}
      <FieldLink/> components to render
      the fields and a <SubmitLink/> component to add a submit button.
    </p>
    <Example
      Element={ExampleElement}
      code={ExampleSrc}
      caption="Form"
      expand
    />

    <TOC menu={FormMenu}/>
  </div>

export default Home