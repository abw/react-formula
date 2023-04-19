import React           from 'react'
import Example         from '../../../site/Example.jsx'
import SetValuesSrc    from './examples/SetValues.jsx?raw'
import SetValues       from './examples/SetValues.jsx'
import UseSetValuesSrc from './examples/UseSetValues.jsx?raw'
import UseSetValues    from './examples/UseSetValues.jsx'
import UseSetValuesESrc from './examples/UseSetValuesE.jsx?raw'
import UseSetValuesE    from './examples/UseSetValuesE.jsx'

const SetExamples = () =>
  <div>
    <h1>Setting Form Values</h1>
    <h2>setValues()</h2>
    <p>
      The <code>setValues</code> function can be used to programmatically
      set form values.  You can use the <code>onLoad</code> handler to
      save a reference to the form context as show in this example.
    </p>
    <Example
      Element={SetValues} code={SetValuesSrc}
      caption="setValues"
    >
      <p>
        Click on one of the buttons to update the form values.
      </p>
    </Example>

    <p>
      If you want to set the values from a component placed inside the{' '}
      <code>Form</code> component then you can use <code>useForm()</code> to
      get access to the form context.
    </p>
    <Example
      Element={UseSetValues} code={UseSetValuesSrc}
      caption="setValues"
    />
    <p>
      If you&apos;re using a <code>button</code> to trigger the call to{' '}
      <code>setValues()</code>, as shown in the example above, then you need
      to make sure you call <code>e.preventDefault()</code> event.  Otherwise
      the form may be submitted. Alternately you can pass the event as the
      second argument to the <code>setValues()</code> method as shown below
      and it will do it for you.
    </p>
    <Example
      Element={UseSetValuesE} code={UseSetValuesESrc}
      caption="setValues"
    />
  </div>

export default SetExamples