import React from 'react'
import CodeBlock from '../../site/CodeBlock.jsx'
import Link from '../../site/Link.jsx'
import useCSS from '../../snippets/useCSS?raw'
import useSCSSVars from '../../snippets/useSCSSVars.scss?raw'
import brandHue from '../../snippets/brandHue.css?raw'
import customSCSS from '../../snippets/customSCSS.scss?raw'

const Introduction = () =>
  <div>
    <h1>Styling the Forms</h1>
    <p className="intro">
      There&apos;s good news and bad news when it comes to styling...
    </p>

    <h2 className="hint">The Good News</h2>
    <p>
      The good news is that there&apos;s
      a default stylesheet which should give you reasonable results as a
      starting point.  You can import it into the top-level of your React
      app with something like this:
    </p>
    <CodeBlock code={useCSS} expand/>
    <p>
      The gooder news is that the stylesheet is built using SASS (specifically
      SCSS) and you can import the styles into your own SASS stylesheet.
      There are numerous {' '}
      <Link to="/styling/sass-variables" text="configuration variables"/>{' '}
      which you can tweak to change the styling.  They&apos;re all defined
      using the <code className="code">!default</code> directive which means
      you can provide your own values before importing the main SCSS file and
      it&apos;ll use your values instead of the defaults.
    </p>
    <CodeBlock code={useSCSSVars} language="scss" expand/>
    <p>
      The goodest news of all is that most of these variables are then
      defined as <Link to="/styling/css-variables" text="CSS variables"/> that
      you can change without having to mess around with SASS.  Just add
      something like this to your CSS stylesheet.
    </p>
    <CodeBlock code={brandHue} language="css" expand/>
    <p>
      Or you can rewrite large chunks of the styling if you prefer. Every
      element has its own CSS class and they&apos;re all scoped inside{' '}
      <code className="code">.formula</code> (which you can change if you
      want to).  For example, you can import
      the main stylesheet and then selectively override the things you want
      to change.
    </p>
    <CodeBlock code={customSCSS} language="scss" expand/>

    <h2 className="hint">The Bad News</h2>
    <p>
      The bad news is that CSS/SASS is currently all there is.  If you want to
      use styled components or any other CSS-in-JS solution then you&apos;re
      bang out of luck.  I&apos;m personally not a huge fan of putting CSS in
      JS (although I totally respect that it may be what works for you), and
      given that I wrote this library to help me get my job done, it&apos;s
      understandably focussed on what works for me.
    </p>
    <p>
      That said, I have plans to add it.  It shouldn&apos;t be particularly
      hard because the library is designed to make changes like that relatively
      simple.  But I just haven&apos;t got around to it yet because it&apos;s
      not high on my list of priorities.
    </p>

  </div>

export default Introduction