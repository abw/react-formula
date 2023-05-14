import React              from 'react'
import Debugging          from './examples/Debugging.jsx'
import DebuggingSrc       from './examples/Debugging.jsx?raw'
import Example            from '../../site/Example.jsx'
import { TutorialPager }  from '../../site/Tutorial.jsx'
import { DebugLink, FieldLink, FieldsLink, FormLink }      from '../../site/Links.jsx'

const DebuggingExample = () =>
  <div>
    <h1>Debugging</h1>
    <p className="intro">
      Let&apos;t face it, things don&apos;t always work right first time,
      so being able to debug your forms is an important requirement.
    </p>

    <h2><code>Debug</code> Component and <code>debug</code> Property</h2>
    <p>
      The <DebugLink/> component can be added to a form to display information
      about the form values and other state variables.  By default it shows
      only the form values, but you can use the <code>status</code> option to
      also show the form status.  If for some reason you don&apos;t want to
      see the values you can set <code>values</code> to <code>false</code>.
    </p>
    <p>
      If you add the <code>debug</code> property to a <FormLink/> or{' '}
      <FieldLink/> then it will enable debugging messages for that component.
      These will be output to the Javascript console.  Any properties (like{' '}
      <code>debug</code>) that are passed to the <FieldsLink/> component will
      be forwarded onto the respective <FieldLink/> components, so it works
      there too.
    </p>
    <Example
      Element={Debugging} code={DebuggingSrc}
      caption="Debugging"
    >
      <p>
        Try changing some of the values in the form.  Watch the form values
        and status change in the debugging panel.  Also check out the
        Javascript console for further debugging messages.
      </p>
    </Example>

    <h2>Where Next?</h2>
    <p>
      On the next page we&apos;ll look at how you can define your own field
      layout.
    </p>

    <TutorialPager uri="debugging"/>
  </div>

export default DebuggingExample