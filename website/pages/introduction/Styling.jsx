import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import Link       from '../../site/Link.jsx'
import useCSS     from '../../snippets/useCSS?raw'
import useSCSS    from '../../snippets/useSCSS?raw'
import IntroductionPager from '../../site/Pager/Introduction.jsx'

const Styling = () =>
  <div>
    <h1>Styling</h1>
    <p>
      If you want to use the provided styles (and you probably will to start
      with) then you&apos;ll need to import the default CSS stylesheet into
      your React app.  Something like this:
    </p>
    <CodeBlock code={useCSS} expand/>
    <p>
      Or if you&apos;re using SASS then you can import the SASS components
      into your main stylesheet.
    </p>
    <CodeBlock code={useSCSS} language="scss" expand/>
    <p>
      See the <Link to="/styling" text="styling section"/> for further
      information about customising the styles.
    </p>
    <IntroductionPager uri="styling"/>
  </div>

export default Styling