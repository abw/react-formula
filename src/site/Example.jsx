import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({
  Element, code, children='', className='', caption
}) => {
  return <div className={`example ${className}`}>
    <div className="mar-t-2">
      <CodeBlock caption={caption} code={prepareCode(code)}/>
    </div>
    {children}
    { Element
      ? <div className="mar-t-2 output">
          <h4 className="caption">Output</h4>
          <Element/>
        </div>
      : null
    }
  </div>
}

export const prepareCode = code =>
  code
    .replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/, '')  // remove everything up to {/* START */}
    .replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/, '') // and everything from {/* END */} onwards
    .replaceAll(/\/\/\s*PRETEND:\s/g, '')           // and the // PRETEND: prefix


export default Example
