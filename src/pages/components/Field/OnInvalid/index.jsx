import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import OnInvalid     from './OnInvalid.jsx'
import OnInvalidSrc  from './OnInvalid.jsx?raw'
import { FieldLink, FormLink, RequiredLink, RequiredMessageLink, ValidateOnBlurLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const OnInvalidExamples = () =>
  <div>
    <h1>Field Events</h1>

    <h2><code>onInvalid</code></h2>
    <p>
      You can add an <code>onInvalid</code> handler to a <FieldLink/>{' '}
      which will be called when the field fails validation.
      The field context will be passed as an argument.
    </p>
    <Example
      Element={OnInvalid} code={OnInvalidSrc}
      caption="onInvalid"
    >
      <p>
        Click one of the fields below and then select the other field without
        entering any text. The <ValidateOnBlurLink/> option on the{' '}
        <FormLink/>{' '} means that the fields will be validated when they
        lose focus. They&apos;re both marked as <RequiredLink/> so they
        will fail validation (assuming you haven&apos;t entered anything) and
        the <code>onInvalid</code> handler will be called.
      </p>
      <p>
        Also note the use of <RequiredMessageLink/> to set a custom message
        for the second field.
      </p>
    </Example>
    <SeeAlso
      links={[
        'field:validate',
        'field:onBlur',
        'field:onFocus',
        'field:onChange',
        'field:onValid',
      ]}
    />
  </div>

export default OnInvalidExamples