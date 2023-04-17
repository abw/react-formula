import React       from 'react'
import Example     from '../../../site/Example.jsx'
import Source      from './examples/Text.jsx?raw'
import Element     from './examples/Text.jsx'
import SourceThin  from './examples/TextThin.jsx?raw'
import ElementThin from './examples/TextThin.jsx'

const Text = () =>
  <div>
    <h1>Text Fields</h1>
    <p>
      The <code className="code">Form</code> component is used to create
      a form wrapper.  Inside that the <code className="code">Field</code>{' '}
      component is used to define a field.  The only property required
      is <code className="code">name</code>.
    </p>
    <p>
      The default field <code className="code">type</code> is{' '}
      <code className="code">text</code> so it&apos;s optional in these
      examples.  You can provide a <code className="code">label</code>{' '}
      and/or <code className="code">placeholder</code> text.  Both are
      also optional.
    </p>
    <Example Element={Element} code={Source}/>

    <h2>Thin Text Fields</h2>
    <p>
      The default behaviour is to make the text fields extend to the
      full width of the container.  Bitter experience has taught me that
      it&apos;s generally easier to do this and constrain the width of
      the container than it is to try and get all inputs the same width,
      especially if you&apos;re using prefix and suffix elements.
      But if you really want to throw caution to the wind you can add
      the <code className="code">thin</code> CSS class via
      the <code className="code">className</code> property.
    </p>
    <p>
      The <code className="code">size</code> property can be set to tell
      the browser <i>approximately</i> how wide the field should be in
      terms of characters, but don&apos;t rely on it being particularly
      accurate.  In terms of usability it is generally considered to be a
      good thing to give users a visual indication of how long the input
      is expected to be.  Unfortunately I can count on no hands the number of
      times a designer has agreed that this is more important than having
      all the fields fully justified.
    </p>
    <Example Element={ElementThin} code={SourceThin}/>
  </div>

export default Text