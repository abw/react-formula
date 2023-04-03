import React from 'react'
import useField from './useField.jsx'

export const DebugField = () => {
  const field = useField()
  return (
    <div className="debug">
      <h4>Field</h4>
      <pre>
        {JSON.stringify(field, null, 2)}
      </pre>
    </div>
  )
}

export default DebugField
