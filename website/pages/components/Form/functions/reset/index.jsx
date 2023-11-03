import React            from 'react'
import Reset            from './examples/Reset.jsx'
import ResetSrc         from './examples/Reset.jsx?raw'
import UseFormReset     from './examples/UseFormReset.jsx'
import UseFormResetSrc  from './examples/UseFormReset.jsx?raw'
import Example          from '@/site/Example.jsx'
import Split            from '@/site/Split.jsx'
import TryItOut         from '@/site/TryItOut.jsx'

const ResetExamples = () =>
  <div className="prose flow">
    <h1>Form Functions</h1>
    <h2><code>reset</code></h2>
    <Split>
      <div>
        <p>
          You can programmatically reset a form by calling the
          the <code>reset()</code> method.
        </p>
      </div>
      <TryItOut>
        Enter some values in the fields and then click on the reset button.
      </TryItOut>
    </Split>
    <Example
      Element={Reset}
      code={ResetSrc}
      caption="reset"
    />

    <h2><code>useForm</code></h2>
    <p>
      If the buttons (or other controls) that you want to use to reset
      the form are contained within the form then you can
      call the <code>useForm()</code> function to gain access to the form
      context.
    </p>
    <Example
      Element={UseFormReset}
      code={UseFormResetSrc}
      caption="useForm() and reset()"
    />

  </div>

export default ResetExamples