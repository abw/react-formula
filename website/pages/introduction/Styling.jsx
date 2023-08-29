import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
import Link       from '../../site/Link.jsx'
import useCSS     from '../../snippets/useCSS?raw'
import useSCSS    from '../../snippets/useSCSS?raw'
import brandHue   from '../../snippets/brandHue.css?raw'
import Pager      from '../../site/Pager/Introduction.jsx'

const Styling = () =>
  <div>
    <h1>Adding Styling</h1>

    <div className="warning alert border">
      <h3>NOTE</h3>
      The CSS/SCSS styling is now provided by{' '}
      <a href="https://abw.github.io/badger-css/forms/">Badger-CSS</a>.
      The instructions on this page need to be updated to reflect that.

    </div>

    <h2 className="hint">Either CSS...</h2>
    <p>
      To get up and running you should import the provided CSS stylesheet
      into your React app.  You don&apos;t have to use this stylesheet, and
      at some point you may want to adapt it.  But it&apos;s a good place to
      start.
    </p>
    <CodeBlock code={useCSS} expand/>
    <p>
      Typically you would add this to the main entry
      point for your application which will depend on which framework you&apos;re
      using.  For example, if you&apos;re using <a href="">Next.js</a> app
      then it&apos;s <code>src/pages/_app.jsx</code>, or if you&apos;ve
      bootstrapped your application using <a href="https://vitejs.dev/">Vite</a>{' '}
      then it would be <code>src/main.jsx</code>.
    </p>

    <h2 className="hint">...or SASS / SCSS</h2>
    <p>
      If you&apos;re using SASS then you can import the SASS (specifically
      SCSS) components into your main stylesheet instead.
    </p>
    <CodeBlock code={useSCSS} language="scss" expand/>


    <h2 className="hint">Optional step - setting the brand hue</h2>
    <p>
      The CSS styles make heavy use of{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS Custom
      Properties</a> (also known as &quot;CSS Variables&quot;), allowing you to
      easily change the styles to fit your needs.
    </p>
    <p>
      A good place to start is
      by changing the <code>--brand-hue</code> variable to match the hue of
      your web site brand color.  The CSS rules are scoped inside the
      <code>.formula</code> namespace (which you can change if you need to).
      You can define the variable inside that scope
      or add it to a more general scope if you prefer (e.g. <code>:root</code>).
    </p>
    <CodeBlock code={brandHue} language="css" expand/>
    <p>
      See the <Link to="/styling" text="styling section"/> for further
      information about customising the styles.
    </p>

    <h2 className="hint">Dark mode included</h2>
    <p>
      The CSS styles include both light and dark modes.  The default CSS scope
      for dark mode is <code>.dark .formula</code> (again, you can change this
      if you need to).  All you have to do is add the <code>dark</code> CSS
      class to any container element and any forms inside it will be rendered
      in the dark style.
    </p>
    <p>
      See the next page for an example form and click on the sun/moon icon
      on the right hand side of the header to toggle between light and dark
      modes.
    </p>
    <Pager uri="styling"/>
  </div>

export default Styling