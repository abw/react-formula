import React          from 'react'
import Example        from '@/site/Example.jsx'
import FunctionsSrc   from './examples/Functions.jsx?raw'
import Functions      from './examples/Functions.jsx'
import { FieldLayoutLink } from '@/site/Links.jsx'
// import SeeAlso      from '../../../../site/SeeAlso.jsx'

const Children = () =>
  <div className="prose">
    <h1>Field Properties</h1>

    <h2><code>children</code></h2>
    <p>
      You can define children of a field, either as components or functions.
      Component can access the field context
      Functions receive the field context as the first argument.
    </p>
    <p>
      Note that if you define children for the field then it will
      replace the default <FieldLayoutLink/> component.  In this case it&apos;s
      up to you to render the field content.
    </p>
    <p>
      If you want to include the default layout for a field and add
      some content of your own then you can include the <FieldLayoutLink/> component
      manually.
    </p>
    <Example
      Element={Functions} code={FunctionsSrc}
      caption="suffix" expand
    />
  </div>


export default Children