import React from 'react'
import Example from '../../site/Example.jsx'
import BrandedCSS from './examples/branded.css?raw'
import Branded    from './examples/Branded.jsx'
import BrandedSrc from './examples/Branded.jsx?raw'
import CodeBlock from '../../site/CodeBlock.jsx'
import { useTheme } from '@abw/react-night-and-day'
import MyFormula from './examples/my-formula.css?raw'
import './examples/branded.css'
import Link from '../../site/Link.jsx'

const CSSVars = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div>
      <h1>CSS Variables</h1>
      <p className="intro">
        The CSS file makes heavy use of CSS variable (also known
        as <i>CSS Custom Properties</i>) for styling.
      </p>
      <h2>Redefining Variables</h2>
      <p>
        To change the styling you simply need to define a <code>.formula</code>{' '}
        block in your CSS file with the new variable definitions.
      </p>
      <CodeBlock
        language="css" code={MyFormula}
        caption="your-stylesheet.css"
        expand
      />
      <p>
        The <code>--brand-hue</code> CSS variable defines the default hue
        for field input and other elements.  You can easily set this to match
        your site branding. Here&apos;s an extract of CSS which sets it to 9
        different colors. We&apos;re also increasing the width of the border
        and focus ring to make it a bit more prominent.
      </p>
      <CodeBlock language="css" code={BrandedCSS}/>
      <p>
        Here&apos;s the same form rendered 9 times inside each of those CSS
        scopes.

      </p>
      <Example
        Element={Branded} code={BrandedSrc}
        caption="Branded Forms"
      >
        <p>
          Try clicking on the fields to see the different
          colored focus rings.  Don&apos;t forget to check it out in{' '}
          <span onClick={toggleTheme} className="link">{isDark ? 'light' : 'dark'} mode</span>{' '}
          too!
        </p>
      </Example>
      <p>
        If for some reason you need to change the CSS class names that are
        used (e.g. to change <code>.formula</code> to <code>.my-formula</code>)
        then you can do that by creating your own version of the CSS stylesheet
        from the SASS sources.  The class names and a number of other core
        properties are defined as {' '}
        <Link to="/styling/sass-variables" text="SASS variables"/>.
      </p>
    </div>
  )
}

export default CSSVars