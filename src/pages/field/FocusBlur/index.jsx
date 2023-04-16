import React         from 'react'
import Example, { prepareCode }       from '../../../site/Example.jsx'
import FocusSource   from './examples/Focus.jsx?raw'
import FocusElement  from './examples/Focus.jsx'
import BlurSource    from './examples/Blur.jsx?raw'
import BlurElement   from './examples/Blur.jsx'
import SetFocusSource  from './examples/SetFocus.jsx?raw'
import SetFocusElement from './examples/SetFocus.jsx'
import FormFocusSource  from './examples/FormFocus.jsx?raw'
import FormFocusElement from './examples/FormFocus.jsx'
import UseFormFocusSource  from './examples/UseFormFocus.jsx?raw'
import UseFormFocusElement from './examples/UseFormFocus.jsx'
import FocusButtonSource  from './examples/FocusButton.jsx?raw'
import CodeBlock from '../../../site/CodeBlock.jsx'

const FocusBlur = () =>
  <div>
    <h1>Focus and Blur</h1>

    <h2>onFocus</h2>
    <Example
      Element={FocusElement} code={FocusSource}
      caption="onFocus"
    >
      <p>
        You can add an <code>onFocus</code> handler to a <code>Field</code>{' '}
        which will be called when the field is focussed.  The field context
        will be passed as an argument.
      </p>
    </Example>

    <h2>onBlur</h2>
    <Example
      Element={BlurElement} code={BlurSource}
      caption="onBlur"
    >
      <p>
        Unsurprisingly you can also add an <code>onBlur</code> handler.
      </p>
    </Example>

    <h2>Focus a Field</h2>
    <Example
      Element={SetFocusElement} code={SetFocusSource}
      caption="Field Focus"
    >
      <p>
        If you want to programmatically set the focus on a field then you
        first need to capture a reference to the field.  You can do that
        using an <code>onLoad</code> property to set a state variable.
      </p>
      <p>
        Then call the <code>setFocus()</code> method on the field object to
        focus it.
      </p>
    </Example>

    <h2>Focus a Form Field</h2>
    <Example
      Element={FormFocusElement} code={FormFocusSource}
      caption="Form Focus"
    >
      <p>
        The other way to programmatically set the focus on a field is to
        call the <code>form.setFocus()</code> method, passing the name of the
        field that you want to focus as an argument.
      </p>
      <p>
        In this case you&apos;ll need to capture a reference to the form using
        the <code>onLoad</code> property to set a state variable.
      </p>
    </Example>

    <Example
      Element={UseFormFocusElement} code={UseFormFocusSource}
      caption="Form Focus"
    >
      <p>
        If the buttons (or other controls) that you want to use to focus
        the fields are contained within the <code>Form</code> then you can
        call the <code>useForm()</code> function to gain access to the form.
      </p>
    </Example>
    <p>
      Be careful to make sure that your buttons call{' '}
      <code>e.preventDefault()</code> on the event, as shown in the example
      above, otherwise the form may be submitted.  Alternately you can pass
      the event to the <code>setFocus()</code> method as the second argument
      and it will do it for you, as shown below.
    </p>
    <CodeBlock code={prepareCode(FocusButtonSource)}/>

  </div>


export default FocusBlur