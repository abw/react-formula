import React from 'react'
import useForm from './useForm.jsx'

export const Debug = () => {
  const form   = useForm()
  const values = form.values
  return (
    <div className="debug">
      <h4>Debug Values</h4>
      <pre>
        {JSON.stringify(values, null, 2)}
      </pre>
    </div>
  )
}

export default Debug
