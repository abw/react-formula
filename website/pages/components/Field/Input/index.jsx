import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import InputSrc      from './Input.jsx?raw'
import Input         from './Input.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const InputExamples = () =>
  <div>
    <h1>Field Components</h1>
    <h2><code>Input</code></h2>
    <p>
      You can define a custom <code className="code">Input</code> component
      to render the input for a field.
    </p>
    <Example
      Element={Input} code={InputSrc}
      caption="Input" expand
    />
    <SeeAlso
      links={[
        'custom:Input',
      ]}
    />
  </div>


export default InputExamples