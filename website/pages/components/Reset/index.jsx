import React         from 'react'
import Example       from '../../../site/Example.jsx'
import ResetSrc      from './examples/Reset.jsx?raw'
import Reset         from './examples/Reset.jsx'
import Properties    from './examples/Properties.jsx'
import PropertiesSrc from './examples/Properties.jsx?raw'
import OnClickSrc    from './examples/OnClick.jsx?raw'
import OnClick       from './examples/OnClick.jsx'
import OnResetSrc    from './examples/OnReset.jsx?raw'
import OnReset       from './examples/OnReset.jsx'
import { FormLink, FormOnResetLink } from '../../../site/Links.jsx'
import Split from '@/website/site/Split.jsx'
import Suggest from '@/website/site/Suggest.jsx'

const ResetExamples = () =>
  <div className="prose">
    <h1>Reset</h1>
    <Split>
      <p>
        The <code>Reset</code> component can be used to add a reset button
        which will reset the form to its initial state.  Any{' '}
        <code>values</code> defined on the <FormLink/> will be restored.
        Any fields that have a <code>default</code> value will be reset to that
        value.
      </p>
      <Suggest>
        Try entering some text in the fields below then click on the Reset
        button.  You should see the fields reset to their original state.
      </Suggest>
    </Split>
    <Example
      Element={Reset} code={ResetSrc}
      caption="Reset" expand
    />

    <h2><code>text</code></h2>
    <p>
      You can use the <code>text</code> property to change the text that&apos;s
      displayed on the button and add a custom CSS class using <code>className</code>.
    </p>
    <Example
      Element={Properties} code={PropertiesSrc}
      caption="Properties" expand
    />

    <h2><code>onClick</code></h2>
    <p>
      You can use the <code>onReset</code> property to register a function
      that should be called when the form is reset.
    </p>
    <Example
      Element={OnClick} code={OnClickSrc}
      caption="onClick" expand
    />

    <h2><code>onReset</code></h2>
    <p>
      The default behaviour for the button is to reset the form.
      You can use the <FormOnResetLink/> form property to register a function
      that will be called when the form is reset.
    </p>
    <Example
      Element={OnReset} code={OnResetSrc}
      caption="onReset" expand
    />

  </div>


export default ResetExamples