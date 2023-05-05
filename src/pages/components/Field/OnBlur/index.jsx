import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import OnBlur        from './OnBlur.jsx'
import OnBlurSrc     from './OnBlur.jsx?raw'
import { FieldLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const OnBlurExamples = () =>
  <div>
    <h1>Field Events</h1>

    <h2><code>onBlur</code></h2>
    <p>
      You can add an <code>onBlur</code> handler to a <FieldLink/>{' '}
      which will be called when the field is blurred (i.e. unselected).
      The field context will be passed as an argument.
    </p>
    <Example
      Element={OnBlur} code={OnBlurSrc}
      caption="onFocus"
    >
      <p>
        Focus on one of the fields below and then select the other field.
        A message should be displayed each time a field loses focus.
      </p>
    </Example>
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