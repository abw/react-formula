import React      from 'react'
import CodeBlock  from '../../site/CodeBlock.jsx'
// import Link       from '../../site/Link.jsx'
import online     from '../../snippets/install/online-css?raw'
import css        from '../../snippets/install/import-css?raw'
import scss       from '../../snippets/install/import-scss?raw'
// import brandHue   from '../../snippets/brandHue.css?raw'
import Pager      from '../../site/Pager/Introduction.jsx'

const Styling = () =>
  <div className="prose">
    <h1>Adding Styling</h1>

    <p>
      This library uses the default form styles provided
      by <a href="https://abw.github.io/badger-css/forms/">Badger-CSS</a>.
      This adopts a <i>mostly classless</i> approach to styling.  What this
      means in practice is that the CSS rules apply styles to the default
      form elements and you generally don&apos;t need to add any extra
      CSS classes to get good looking forms out of the box.
    </p>
    <p>
      To get up and running quickly you can import the
      import the provided CSS stylesheet
      into your React app.  You don&apos;t have to use this stylesheet, and
      at some point you may want to adapt it.  But it&apos;s a good place to
      start.
    </p>


    <p>
      The <b>TL;DR</b> version is shown below.
      The{' '}
      <a href="https://abw.github.io/badger-css/getting-started/installation">Badger CSS Installation</a>{' '}
      documentation has further details if necessary.
    </p>

    <h2>Online CSS</h2>
    <p>
      You can import the Badger-CSS styles by adding the following to the{' '}
      <code>&lt;head&gt;</code> section of your web page.
    </p>
    <CodeBlock code={online} expand/>

    <h2>Local CSS</h2>
    <p>
      Or you can import the CSS into your application from the copy which
      will be installed in your <code>node_modules</code> directory.
    </p>
    <p>
      Typically you would add this to the main entry
      point for your application which will depend on which framework you&apos;re
      using.  For example, if you&apos;re using <a href="">Next.js</a> app
      then it&apos;s <code>src/pages/_app.jsx</code>, or if you&apos;ve
      bootstrapped your application using <a href="https://vitejs.dev/">Vite</a>{' '}
      then it would be <code>src/main.jsx</code>.
    </p>
    <CodeBlock code={css} expand/>

    <h2>Local SASS / SCSS</h2>
    <p>
      If you&apos;re using SASS then you can import the SASS (specifically
      SCSS) components into your main stylesheet instead.
    </p>
    <CodeBlock code={scss} language="scss" expand/>
    <p>
      The advantage of using SCSS is that it makes it easy to change your
      brand colors or make other adjustments to the default styles.
      See the relevant <a href="https://abw.github.io/badger-css/colors/brand">Badger CSS </a> page
      for further details.
    </p>
    <Pager uri="styling"/>
  </div>

export default Styling