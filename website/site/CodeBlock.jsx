import React from 'react'
import { useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { sleep } from '@abw/badger-utils'
import { useTheme } from './Theme.jsx'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)

export const CodeBlock = ({code, children, language='jsx', caption, expand=false, fixed=expand}) => {
  const { dark } = useTheme()
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(expand)
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    sleep(2000).then(() => setCopied(false))
  }
  return (
    <div className={`codeblock ${expanded ? 'expanded' : ''} ${fixed ? 'fixed' : 'expandable'}`}>
      {Boolean(caption) && <h4 className="caption">{caption}</h4>}
      <div className="controls">
        <div className="expand" onClick={() => setExpanded(! expanded)}>
          { expanded ? 'Compress' : 'Expand' }
        </div>
        <div
          className={`clipboard ${copied ? 'copied' : ''}`}
          onClick={copy}
        >
          { copied ? 'Copied' : 'Copy' }
        </div>
      </div>
      <SyntaxHighlighter
        language={language} style={a11yDark} showLineNumbers={true}
        customStyle={{
          paddingBottom: fixed ? '1rem' : '2rem',
          backgroundColor: dark ? '#14191B' : '#292C2D'
        }}
      >
        {code||children}
      </SyntaxHighlighter>
    </div>
  )
}


export default CodeBlock