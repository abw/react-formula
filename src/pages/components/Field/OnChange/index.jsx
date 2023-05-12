import React          from 'react'
import Example        from '../../../../site/Example.jsx'
import OnChangeSource from './OnChange.jsx?raw'
import OnChange       from './OnChange.jsx'
import { FieldLink }  from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const OnChangeExamples = () =>
  <div>
    <h1>Field Events</h1>
    <h2><code>onChange</code></h2>

    <p>
      You can add an <code>onChange</code> handler to a <FieldLink/>{' '}
      which will be called when the field value is changed.  The field context
      will be passed as an argument.
    </p>
    <Example
      Element={OnChange} code={OnChangeSource}
      caption="onChange" expand
    >
      <p>
        Try entering some text in the field below.  You should see the
        &quot;Current value&quot; display update to reflect the field
        content.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:validateOnChange',
        'field:onBlur',
        'field:onFocus',
        'field:onValid',
        'field:onInvalid',
      ]}
    />
  </div>


export default OnChangeExamples