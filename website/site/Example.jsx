import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({
  Element,
  code,
  html,
  children='',
  className='',
  caption,
  fixed,
  expand,
  language
}) => {
  return <div className={`example grid-2 gap-8 stack-desktop ${className}`}>
    <div className="source">
      <CodeBlock
        caption={caption}
        code={code||html}
        expand={expand}
        fixed={fixed}
        language={html ? 'html' : language}
      />
    </div>
    { Boolean(children) &&
      <div className="interim">
        {children}
      </div>
    }
    { Element
      ? <div className="output">
          <h4 className="caption">Output</h4>
          <Element/>
        </div>
      : null
    }
    { html
      ? <div className="output">
          <h4 className="caption">Output</h4>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      : null
    }
  </div>
}

export default Example
