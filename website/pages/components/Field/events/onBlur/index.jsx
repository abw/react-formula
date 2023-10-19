import React         from 'react'
import OnBlur        from './examples/OnBlur.jsx'
import OnBlurSrc     from './examples/OnBlur.jsx?raw'
import Example       from '@/site/Example.jsx'
import SeeAlso       from '@/site/SeeAlso.jsx'
import Split         from '@/site/Split.jsx'
import Suggest       from '@/site/Suggest.jsx'
import { FieldLink } from '@/site/Links.jsx'

const OnBlurExamples = () =>
  <div className="prose">
    <h1>Field Events</h1>

    <h2><code>onBlur</code></h2>
    <Split>
      <p>
        You can add an <code>onBlur</code> handler to a <FieldLink/>{' '}
        which will be called when the field is blurred (i.e. unselected).
        The field context will be passed as an argument.
      </p>
      <Suggest>
        Focus on one of the fields below and then select the other field.
        A message should be displayed each time a field loses focus.
      </Suggest>
    </Split>
    <Example
      Element={OnBlur} code={OnBlurSrc}
      caption="onFocus" expand
    />

    <SeeAlso
      links={[
        'field:validateOnBlur',
        'field:onFocus',
        'field:onChange',
        'field:onValid',
        'field:onInvalid',
      ]}
    />
  </div>


export default OnBlurExamples