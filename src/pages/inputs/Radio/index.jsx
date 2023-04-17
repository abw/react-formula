import React from 'react'
import Example      from '../../../site/Example.jsx'
import Source       from './examples/Radio.jsx?raw'
import Element      from './examples/Radio.jsx'
import SourceWide   from './examples/RadioWide.jsx?raw'
import ElementWide  from './examples/RadioWide.jsx'
import SourceBare   from './examples/RadioBare.jsx?raw'
import ElementBare  from './examples/RadioBare.jsx'

const Radio = () =>
  <div>
    <h1>Radio Button Fields</h1>
    <p>
      Set the <code className="code">type</code> to{' '}
      <code className="code">radio</code> to create a radio button set.
      The <code className="code">options</code> property should be used to
      define the options.  In simple cases where the value and text are the
      same then you only need to provide an array of values.  Otherwise,
      provide an array of objects containing{' '}
      <code className="code">value</code> and <code className="code">text</code>{' '}
      properties.
    </p>
    <p>
      You can also add <code className="code">className</code> if
      you want to add a particular class to an option.  Or for more
      complex markup, define the <code className="code">text</code> as a
      JSX snippet.  All of these properties can be defined in a{' '}
      <a href="schema">separate scheme</a> or you can &quot;inline&quot;
      them as shown here.  Whatever floats your boat.
    </p>
    <Example Element={Element} code={Source}/>

    <h2>Wide Radio Button Options</h2>
    <p>
      The default behaviour is for radio button options to only take up as
      much room as is required for the text.  Add the{' '}
      <code className="code">wide</code> CSS class using the{' '}
      <code className="code">className</code> property
      to make them extend across the full width of the container.
    </p>
    <p>
      If you don&apos;t like the &quot;boxy&quot; look then add the{' '}
      <code className="code">bare</code> class to remove the border and
      background.
    </p>
    <Example Element={ElementWide} code={SourceWide}/>

    <h2>Bare Radio Button Options</h2>
    <p>
      If you don&apos;t like the &quot;boxy&quot; look then add the{' '}
      <code className="code">bare</code> class to remove the border and
      background.
    </p>
    <Example Element={ElementBare} code={SourceBare}/>

  </div>

export default Radio