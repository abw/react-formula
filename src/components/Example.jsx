import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export const Example = ({Element, code, children='', className=''}) => {
  const core = code
    .replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/, '')  // remove everything up to {/* START */}
    .replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/, '') // and everything from {/* END */} onwards
    .replace(/[\n\s]*\/\/\s*PRETEND:\s*/, '')        // and the // PRETEND: prefix

  return <div className={`example ${className}`}>
    {children}
    <div className="row stack-desktop">
      <div className="split-2 gut-r">
        <CodeBlock>{core}</CodeBlock>
      </div>
      { Element
        ? <div className="split-2 gut-l output">
            <Element/>
          </div>
        : null
      }
    </div>
  </div>
}

export const CodeBlock = ({children}) => <div className="codeblock">
  <SyntaxHighlighter language="jsx" style={xonokai} showLineNumbers={true}>
    {children}
  </SyntaxHighlighter>
</div>

export default Example
