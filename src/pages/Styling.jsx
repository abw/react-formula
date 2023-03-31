import React from 'react'
import CodeBlock from '../components/CodeBlock.jsx'

const Styling = () =>
  <div>
    <h1>Styling the Forms</h1>
    <p>
      There&apos;s good news and bad news.  The good news is that there&apos;s
      a default stylesheet which should give you reasonable results as a
      starting point.  You can import it into the top-level of your React
      app with something like this:
    </p>
    <CodeBlock>
      {`import '@abw/react-formula/css/formula.css'`}
    </CodeBlock>
    <p>
      The gooder news is that the stylesheet is built using SASS (specifically
      SCSS) and you can import the styles into your own SASS stylesheet like so:
    </p>
    <CodeBlock language="scss">
      {`@import '@abw/react-formula/scss/formula.scss';`}
    </CodeBlock>
    <p>
      The goodest news it that it&apos;s built from numerous {' '}
      <a href="sass-variables">configuration variables</a> which you can tweak
      to change the styling.  They&apos;re all defined using the{' '}
      <code className="code">!default</code> directive which means you can
      provide your own values before importing the main SCSS file and it&apos;ll
      use your values instead of the defaults.
    </p>
    <CodeBlock language="scss">
      {`$brand-hue:     123;
$valid-hue:     40;
$invalid-hue:   12;
@import '@abw/react-formula/scss/formula.scss';`}
    </CodeBlock>
    <p>
      Or you can rewrite large chunks of the styling if you prefer. Every
      element has its own CSS class and they&apos;re all scoped inside{' '}
      <code className="code">form.formula</code>.  For example, you can import
      the main stylesheet and then selectively override the things you want
      to change.
    </p>
    <CodeBlock language="scss">
      {`@import '@abw/react-formula/scss/formula.scss';

form.formula {
  .field {
    .inputs {
      select {
        // your custom styling overrides
      }
    }
  }
}`}
    </CodeBlock>
    <p>
      The bad news is that CSS/SASS is currently all there is.  If you want to
      use styled components or any other CSS-in-JS solution then you&apos;re
      bang out of luck.  I&apos;m personally not a huge fan of putting CSS in
      JS (although I totally respect that it may be what works for you), and
      given that I wrote this library to help me get my job done, it&apos;s
      understandably focussed on what works for me.
    </p>

  </div>

export default Styling