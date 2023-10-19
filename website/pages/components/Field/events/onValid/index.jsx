import React      from 'react'
import OnValid    from './examples/OnValid.jsx'
import OnValidSrc from './examples/OnValid.jsx?raw'
import Example    from '@/site/Example.jsx'
import SeeAlso    from '@/site/SeeAlso.jsx'
import Split      from '@/site/Split.jsx'
import Suggest    from '@/site/Suggest.jsx'
import { FieldLink, FormLink } from '@/site/Links.jsx'

const OnValidExamples = () =>
  <div className="prose">
    <h1>Field Events</h1>
    <h2><code>onValid</code></h2>
    <Split>
      <p>
        You can add an <code>onValid</code> handler to a <FieldLink/>{' '}
        which will be called when the field is successfully validated.
        The field context will be passed as an argument.
      </p>
      <Suggest>
        Enter some text in one of the fields below and then select the other
        field.  The <code>validateOnBlur</code> option on the <FormLink/>{' '}
        means that the first field will be validated when it loses focus and
        the <code>onValid</code> handler will be called.
      </Suggest>
    </Split>
    <Example
      Element={OnValid} code={OnValidSrc}
      caption="onValid" expand
    />

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