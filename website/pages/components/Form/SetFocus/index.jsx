import React                    from 'react'
import CodeBlock                from '../../../../site/CodeBlock.jsx'
import Example, { prepareCode } from '../../../../site/Example.jsx'
import FormFocusSrc             from './FormFocus.jsx?raw'
import FormFocus                from './FormFocus.jsx'
import UseFormFocusSrc          from './UseFormFocus.jsx?raw'
import UseFormFocus             from './UseFormFocus.jsx'
import FocusButtonSrc           from './FocusButton.jsx?raw'
import { FieldLink, FormLink } from '../../../../site/Links.jsx'

const SetFocusExamples = () =>
  <div>
    <h1>Focus Fields</h1>

    <h2><code>setFocus()</code></h2>
    <p>
      You can programmatically set the focus on a <FieldLink/> by calling
      the <code>setFocus()</code> method on the <FormLink/>, passing the
      name of the field that you want to focus as an argument.
    </p>
    <p>
      You can capture a reference to the form using the <code>onLoad</code>{' '}
      property to set a state variable, as shown in this example.
    </p>
    <Example
      Element={FormFocus} code={FormFocusSrc}
      caption="onLoad() and setFocus()"
    >
      <p>
        Click on one of the buttons to focus on a field.
      </p>
    </Example>

    <p>
      If the buttons (or other controls) that you want to use to focus
      the fields are contained within the <FormLink/> then you can
      call the <code>useForm()</code> function to gain access to the form
      context.
    </p>
    <Example
      Element={UseFormFocus} code={UseFormFocusSrc}
      caption="useForm() and setFocus()"
    >
    </Example>
    <p>
      Be careful to make sure that your buttons call{' '}
      <code>e.preventDefault()</code> on the event, as shown in the example
      above, otherwise the form may be submitted.  Alternately you can pass
      the event to the <code>setFocus()</code> method as the second argument
      and it will do it for you, as shown below.
    </p>
    <CodeBlock code={prepareCode(FocusButtonSrc)} expand/>

  </div>


export default SetFocusExamples