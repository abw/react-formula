import React from 'react'
import CodeBlock from '../../site/CodeBlock.jsx'
import install from '../../snippets/install.bash?raw'
import Import  from '../../snippets/Import.jsx?raw'
import IntroductionPager from '../../site/Pager/Introduction.jsx'

const Installation = () =>
  <div>
    <h1>Installation</h1>
    <p>
      Add the <code className="code">@abw/react-formula</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash" code={install} expand/>
    <p>
      You can then import the modules and start using them.
    </p>
    <CodeBlock code={Import} expand/>
    <p>
      If you want to use the provided styles (and you probably will to start
      with) then you&apos;ll need to import the default CSS stylesheet into
      your React app.  Something like this:
    </p>
    <IntroductionPager uri="installation"/>
  </div>

export default Installation