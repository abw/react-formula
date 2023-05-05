import React         from 'react'
import Example       from '../../../../site/Example.jsx'
import SetValueSrc   from './SetValue.jsx?raw'
import SetValue      from './SetValue.jsx'
import SetValueEventSrc from './SetValueEvent.jsx?raw'
import SetValueEvent    from './SetValueEvent.jsx'
import { FieldLink, FormLink, FormSetValuesLink } from '../../../../site/Links.jsx'
import SeeAlso from '../../../../site/SeeAlso.jsx'

const SetValueExamples = () =>
  <div>
    <h1>Field Functions</h1>

    <h2><code>setValue()</code></h2>
    <p>
      If you want to programmatically set the value for a <FieldLink/> then
      you first need to capture a reference to it.  You can do that
      using an <code>onLoad</code> property to set a state variable.
    </p>
    <p>
      Then call the <code>setValue()</code> method on the field object to
      set the value.
    </p>
    <Example
      Element={SetValue} code={SetValueSrc}
      caption="setValue()"
    >
      <p>
        Click on one of the buttons to set the input value.
      </p>
    </Example>

    <p>
      One thing to be aware of is that the default behaviour of a{' '}
      <code>button</code> inside a <code>form</code> is to submit the form.
      This is an innate property of HTML and not something that&apos;s specific
      to this library.  In the example above we put the buttons outside the{' '}
      <FormLink/> to avoid this behaviour, but it&apos;s not always possible
      to do that. There are a number of ways to work around it, shown in the
      example below.
    </p>
    <p>
      The first &quot;Antelope&quot; button calls the{' '}
      <code>preventDefault()</code>{' '} method on the event.  Given that
      this is a bit clumsy, the <code>setValue()</code> method allows you to
      pass the event as the second argument and it will call{' '}
      <code>preventDefault()</code> for you, as shown on the
      second &quot;Badger&quot; button.  The third approach,
      shown on the &quot;Camel&quot; button, is to explicitly set the{' '}
      <code>type</code> to <code>button</code> to override the default{' '}
      <code>type</code> of <code>submit</code>.  The fourth &quot;Danger!&quot;
      button doesn&apos;t do anything and will cause the form to submit, just
      in case you don&apos;t believe me that it&apos;s really a problem.
    </p>
    <Example
      Element={SetValueEvent} code={SetValueEventSrc}
      caption="setValue()"
    >
      <p>
        Click on one of the buttons to set the input value.  Be warned
        that the fourth button will cause the form to submit.
      </p>
    </Example>

    <p>
      You can also set values for one or more fields by name using the{' '}
      <FormLink/> <FormSetValuesLink/> method.
    </p>
    <SeeAlso
      links={[
        'form:setValues',
        'field:setFocus',
        'field:reset',
      ]}
    />
  </div>


export default SetValueExamples