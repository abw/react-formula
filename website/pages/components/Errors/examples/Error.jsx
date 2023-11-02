import { Form, Errors, Reset, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Errors, Reset, useForm } from '@abw/react-formula'

const Error = () =>
  <Form>
    <Errors/>
    <ErrorButtons/>
    <Reset/>
  </Form>

const ErrorButtons = () => {
  const { handleError } = useForm()

  const setError = (event, error) => {
    event.preventDefault()
    handleError({ error })
  }

  const errorString = event =>
    setError(
      event,
      'An error string'
    )

  const errorObject = event =>
    setError(
      event,
      { message: 'An error object with a message' }
    )

  const errorLabel  = event =>
    setError(
      event,
      {
        label: 'Example',
        message: 'An error object with label and message'
      }
    )

  return (
    <div className="grid-3 gap-4 mar-b-4">
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorObject}>
        Error Object
      </button>
      <button onClick={errorLabel}>
        Labelled Error
      </button>
    </div>
  )
}

export default Error