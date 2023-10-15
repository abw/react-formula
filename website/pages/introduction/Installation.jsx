import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import install    from '../../snippets/install.bash?raw'
import Pager      from '../../site/Pager/Introduction.jsx'

const Installation = () =>
  <div className="prose">
    <h1>Installation</h1>
    <p>
      Add the <code className="code">@abw/react-formula</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash" code={install} expand/>
    <p className="mar-t-4">
      There, that wasn&apos;t too hard now, was it?  The next step is to
      add the default CSS stylesheet or SASS components to your project.
      Your forms will be perfectly functional without them, but maybe a
      little bland.
    </p>
    <Pager uri="installation"/>
  </div>

export default Installation