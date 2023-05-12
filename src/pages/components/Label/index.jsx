import React               from 'react'
import Example             from '../../../site/Example.jsx'
import Label               from './Label.jsx'
import LabelSrc            from './Label.jsx?raw'
import { FieldLink } from '../../../site/Links.jsx'

const LabelExamples = () =>
  <div>
    <h1>Label</h1>
    <p>
      The <code>Label</code> component can be used to add a label to a{' '}
      <FieldLink/>. It&apos;s usually added automatically, but it&apos;s
      useful if you&apos;re implementing your own layout for a field.
    </p>
    <Example
      Element={Label} code={LabelSrc}
      caption="Label"
    >
    </Example>
  </div>

export default LabelExamples