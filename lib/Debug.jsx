import React from 'react'
import useForm from './useForm.jsx'

export const Debug = ({showValues=true, showForm=false }) => {
  const form   = useForm()
  const values = form.values
  return (
    <div className="debug">
      { showValues &&
        <>
          <h4>Values</h4>
          <pre>
            {JSON.stringify(values, null, 2)}
          </pre>
        </>
      }
      { showForm &&
        <>
          <h4>Form</h4>
          <pre>
            {JSON.stringify(form, null, 2)}
          </pre>
        </>
      }
    </div>
  )
}

export default Debug
