import React          from 'react'
import OnLoad         from './examples/OnLoad.jsx'
import OnLoadSrc      from './examples/OnLoad.jsx?raw'
import Example        from '@/site/Example.jsx'
import SeeAlso        from '@/site/SeeAlso.jsx'
import Split          from '@/site/Split.jsx'
import Suggest        from '@/site/Suggest.jsx'
import { FieldLink }  from '@/site/Links.jsx'

const OnInvalidExamples = () =>
  <div className="prose">
    <h1>Field Events</h1>

    <h2><code>onLoad</code></h2>

    <Split>
      <p>
        You can add an <code>onInvalid</code> handler to a <FieldLink/>{' '}
        which will be called when the field is initialised.  This is useful
        if you want to programmatically control the field.
      </p>
      <Suggest>
        Click on the buttons to programmatically call field methods.
        The first resets the field, the next two set the field value, and
        the last one focusses the field.
      </Suggest>
    </Split>
    <Example
      Element={OnLoad} code={OnLoadSrc}
      caption="onLoad"
    />

    <SeeAlso
      links={[
        'field:onBlur',
        'field:onFocus',
        'field:onChange',
        'field:onValid',
        'field:setFocus',
      ]}
    />
  </div>

export default OnInvalidExamples