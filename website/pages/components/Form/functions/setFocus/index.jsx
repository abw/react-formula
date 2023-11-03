import React            from 'react'
import FormFocusSrc     from './examples/FormFocus.jsx?raw'
import FormFocus        from './examples/FormFocus.jsx'
import UseFormFocusSrc  from './examples/UseFormFocus.jsx?raw'
import UseFormFocus     from './examples/UseFormFocus.jsx'
import FocusButtonSrc   from './examples/FocusButton.jsx?raw'
import Example          from '@/site/Example.jsx'
import Split            from '@/site/Split.jsx'
import TryItOut         from '@/site/TryItOut.jsx'
import { FieldLink, FormLink, OnLoadLink } from '@/site/Links.jsx'
import CodeBlock, { prepareCode } from '@/site/CodeBlock.jsx'

const SetFocusExamples = () =>
  <div className="prose flow">
    <h1>Focus Fields</h1>

    <h2><code>setFocus()</code></h2>
    <Split align="end">
      <div>
        <p>
          You can programmatically set the focus on a <FieldLink/> by calling
          the <code>setFocus()</code> method on the <FormLink/>, passing the
          name of the field that you want to focus as an argument.
        </p>
        <p>
          You can capture a reference to the form using the <OnLoadLink/>{' '}
          property to set a state variable, as shown in this example.
        </p>
      </div>
      <TryItOut>
        Click on one of the buttons to focus on a field.
      </TryItOut>
    </Split>
    <Example
      Element={FormFocus} code={FormFocusSrc}
      caption="onLoad() and setFocus()"
    />

    <h2><code>useForm</code></h2>
    <p>
      If the buttons (or other controls) that you want to use to focus
      the fields are contained within the <FormLink/> then you can
      call the <code>useForm()</code> function to gain access to the form
      context.
    </p>
    <Example
      Element={UseFormFocus} code={UseFormFocusSrc}
      caption="useForm() and setFocus()"
    />

    <h2>Preventing Default Event</h2>
    <Split>
      <p>
        Be careful to make sure that your buttons call{' '}
        <code>e.preventDefault()</code> on the event, as shown in the example
        above, otherwise the form may be submitted.  Alternately you can pass
        the event to the <code>setFocus()</code> method as the second argument
        and it will do it for you, as shown below.
      </p>
      <CodeBlock code={prepareCode(FocusButtonSrc)} expand/>
    </Split>

  </div>


export default SetFocusExamples