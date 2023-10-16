import React                from 'react'
import Example              from '../../../site/Example.jsx'
import CancelSubmit         from './examples/CancelSubmit.jsx'
import CancelSubmitSrc      from './examples/CancelSubmit.jsx?raw'
import Gap                  from './examples/Gap.jsx'
import GapSrc               from './examples/Gap.jsx?raw'
import Space                from './examples/Space.jsx'
import SpaceSrc             from './examples/Space.jsx?raw'
import ClassName            from './examples/ClassName.jsx'
import ClassNameSrc         from './examples/ClassName.jsx?raw'
import CancelSubmitProps    from './examples/CancelSubmitProps.jsx'
import CancelSubmitPropsSrc from './examples/CancelSubmitProps.jsx?raw'
import { CancelLink, SubmitLink } from '../../../site/Links.jsx'

const CancelSubmitExamples = () =>
  <div className="prose">
    <h1>CancelSubmit</h1>
    <p>
      The <code>CancelSubmit</code> component can be used to add both{' '}
      <CancelLink/> and <SubmitLink/> controls.
    </p>
    <Example
      Element={CancelSubmit} code={CancelSubmitSrc}
      caption="CancelSubmit" expand
    />

    <h2><code>gap</code></h2>
    <p>
      The default CSS class for the container is <code>flex gap-4 controls</code>.
      The <code>flex</code> and <code>gap-4</code> classes are provided
      by <a href="https://abw.github.io/badger-css/utilities/flexbox">Badger-CSS</a> and
      set the display to <code>flex</code> and the <code>gap</code> to 4 units
      (1rem), respectively.  The <code>controls</code> CSS class doesn&apos;t
      have any styling by default, but you can add your own CSS rules to target
      it if you want to.
    </p>
    <p>
      The <code>gap</code> property can be used to set the gap between the
      buttons in multiple of 0.25rem.
    </p>
    <Example
      Element={Gap} code={GapSrc}
      caption="Setting the Gap" expand
    />

    <h2><code>space</code></h2>
    <p>
      The <code>space</code> property can be used to add the <code>space</code>{' '}
      CSS class which set the <code>justify-content</code> to <code>space-between</code>,
      effectively pushing the buttons out to the full width of the container.
    </p>
    <Example
      Element={Space} code={SpaceSrc}
      caption="Spacing Buttons" expand
    />

    <h2><code>className</code></h2>
    <p>
      The <code>className</code> property can be used to define your own
      CSS classes for the container.
    </p>
    <Example
      Element={ClassName} code={ClassNameSrc}
      caption="Custom ClassName" expand
    />

    <h2><code>reset</code> and <code>submit</code></h2>
    <p>
      You can define properties for the <CancelLink/> component using
      the <code>cancel</code> property, and for the <SubmitLink/>{' '}
      component using the <code>submit</code> property.  You can add a{' '}
      <code>className</code> property to set the CSS class of the container.
    </p>
    <Example
      Element={CancelSubmitProps} code={CancelSubmitPropsSrc}
      caption="Properties" expand
    />
  </div>

export default CancelSubmitExamples