import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import OnValid       from './OnValid.jsx'
import OnValidSrc    from './OnValid.jsx?raw'
import { FieldLink, FormLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const OnValidExamples = () =>
  <div>
    <h1>Field Events</h1>
    <h2><code>onValid</code></h2>
    <p>
      You can add an <code>onValid</code> handler to a <FieldLink/>{' '}
      which will be called when the field is successfully validated.
      The field context will be passed as an argument.
    </p>
    <Example
      Element={OnValid} code={OnValidSrc}
      caption="onValid"
    >
      <p>
        Enter some text in one of the fields below and then select the other
        field.  The <code>validateOnBlur</code> option on the <FormLink/>{' '}
        means that the first field will be validated when it loses focus and
        the <code>onValid</code> handler will be called.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:validate',
        'field:onBlur',
        'field:onFocus',
        'field:onChange',
        'field:onInvalid',
      ]}
    />
  </div>


export default OnValidExamples