import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({Element, code, children='', className=''}) => {
  const core = code
    .replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/, '')  // remove everything up to {/* START */}
    .replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/, '') // and everything from {/* END */} onwards
    .replace(/[\n\s]*\/\/\s*PRETEND:\s*/, '')        // and the // PRETEND: prefix

  return <div className={`example ${className}`}>
    {children}
    <div className="mar-t-4">
      <CodeBlock>{core}</CodeBlock>
    </div>
    { Element
      ? <div className="mar-t-4">
          <Element/>
        </div>
      : null
    }
  </div>
}

export default Example
