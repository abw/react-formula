import React    from 'react'
import Example  from '../../../site/Example.jsx'
import Source   from './examples/TextArea.jsx?raw'
import Element  from './examples/TextArea.jsx'

const TextArea = () =>
  <div>
    <h1>Text Area Fields</h1>
    <p>
      Set the <code className="code">type</code> to{' '}
      <code className="code">textarea</code> for a text area input.  The
      optional <code className="code">rows</code> property can be used to
      specify the number of rows.
    </p>
    <Example Element={Element} code={Source}/>
  </div>

export default TextArea