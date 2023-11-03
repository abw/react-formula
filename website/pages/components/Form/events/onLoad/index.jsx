import React      from 'react'
import OnLoad     from './examples/OnLoad.jsx'
import OnLoadSrc  from './examples/OnLoad.jsx?raw'
import Example    from '@/site/Example.jsx'

const OnLoadExamples = () =>
  <div className="prose flow">
    <h1>Form Events</h1>
    <h2><code>onLoad</code></h2>
    <p>
      The <code>onLoad</code> property can be used to define a function
      that will be called when the form is loaded.  This allows you to
      capture a reference to the form context object for manipulating
      the form programmatically.
    </p>
    <Example
      Element={OnLoad}
      code={OnLoadSrc}
      caption="onLoad"
    />
  </div>


export default OnLoadExamples