import React from 'react'
import Example from '../components/Example.jsx'
import Source from '../examples/Radio.jsx?raw'
import Element from '../examples/Radio.jsx'

const Radio = () =>
  <div>
    <h1>Radio Button Fields</h1>
    <Example Element={Element} code={Source}>
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
    </Example>

  </div>

export default Radio