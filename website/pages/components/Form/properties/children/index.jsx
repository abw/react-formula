import React          from 'react'
import Example        from '@/site/Example.jsx'
import FunctionsSrc   from './examples/Functions.jsx?raw'
import Functions      from './examples/Functions.jsx'

const Children = () =>
  <div className="prose">
    <h1>Form Properties</h1>

    <h2><code>children</code></h2>
    <p>
      You can define children of a form, either as components or functions.
      Components can access the form context via <code>useForm</code>.
      Functions receive the form context as the first argument.
    </p>
    <Example
      Element={Functions}
      code={FunctionsSrc}
      caption="children" expand
    />
  </div>


export default Children