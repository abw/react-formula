import React from 'react'
import Example from '../../site/Example.jsx'
import BrandedCSS from './examples/branded.css?raw'
import Branded    from './examples/Branded.jsx'
import BrandedSrc from './examples/Branded.jsx?raw'
import Link from '../../site/Link.jsx'
import CodeBlock from '../../site/CodeBlock.jsx'
import { useTheme } from '../../site/Theme.jsx'

const CSSVars = () => {
  const { dark, toggleTheme } = useTheme()
  return (
    <div>
      <h1>CSS Variables</h1>
      <p>
        The <code>--brand-hue</code> CSS variable defines the overall hue
        for fields.  You can easily set this to match your site branding.
        Here&apos;s an extract of CSS which sets it to 9 different colors.
        We&apos;re also increasing the width of the border and focus ring
        to make it a bit more prominent.
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
          <span onClick={toggleTheme} className="link">{dark ? 'light' : 'dark'} mode</span>{' '}
          too!
        </p>
      </Example>
    </div>
  )
}

export default CSSVars