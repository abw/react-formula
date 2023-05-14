import React            from 'react'
import Example          from '../../../site/Example.jsx'
import HiddenSrc        from './Hidden.jsx?raw'
import Hidden           from './Hidden.jsx'
import HiddenValuesSrc  from './HiddenValues.jsx?raw'
import HiddenValues     from './HiddenValues.jsx'
import HiddenFormSrc    from './HiddenForm.jsx?raw'
import HiddenForm       from './HiddenForm.jsx'
import { FormLink }     from '../../../site/Links.jsx'

const HiddenExample = () =>
  <div>
    <h1>Hidden Input</h1>
    <p>
      Set the <code>type</code> to <code>hidden</code> to embed a hidden
      value in the <FormLink/>.  A hidden value will be included in the
      form <code>values</code> that will be submitted.  But otherwise it is
      invisible to the naked eye.
    </p>
    <Example
      Element={Hidden}
      code={HiddenSrc}
    >
      <p>
        The hidden value for <code>user_id</code> will be defined in the
        form values.  Try entering some text for &quot;Your name&quot; and
        then click on the &quot;Submit&quot; button.  You should see both
        the <code>user_id</code> and <code>name</code> included in the
        submitted values.
      </p>
    </Example>

    <p>
      You don&apos;t have to define the <code>value</code> in the field as
      shown above.  It can also be defined in the <code>values</code> that
      you pass to the <FormLink/>
    </p>
    <Example
      Element={HiddenValues}
      code={HiddenValuesSrc}
    />

    <p>
      You can also pass <code>hidden</code> values to the <FormLink/> and
      they will automatically be included in the submitted values.
    </p>
    <Example
      Element={HiddenForm}
      code={HiddenFormSrc}
    />
  </div>

export default HiddenExample