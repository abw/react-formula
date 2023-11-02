import { Form, Field, Errors, Reset, useForm } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Errors, Reset, useForm } from '@abw/react-formula'

const ErrorsExample = () =>
  <Form>
    <Field name="one" label="Field One"/>
    <Field name="two" label="Field Two"/>
    <Errors/>
    <ErrorButtons/>
    <Reset/>
  </Form>

const ErrorButtons = () => {
  const { handleError } = useForm()

  const setErrors = (event, errors) => {
    event.preventDefault()
    handleError({ errors })
  }

  const errorString = event =>
    setErrors(event, [
      'A single error in errors',
    ])

  const errorStrings = event =>
    setErrors(event, [
      'An error string',
      'Another error string'
    ])

  const errorObjects = event =>
    setErrors(event, [
      { message: 'An error message in an object' },
      { message: 'Another error message in an object'}
    ])

  const errorLabels  = event =>
    setErrors(event, [
      { label: 'The First Field',  message: 'This is a labelled error' },
      { label: 'The Second Field', message: 'Another labelled error' }
    ])

  const errorFields  = event =>
    setErrors(event, [
      // both 'name' and 'field' (and also 'param') can be
      // used to denote the invalid field
      { name:  'one', message: 'An error for the "one" field' },
      { field: 'two', message: 'An error for the "two" field' }
    ])

  return (
    <div className="grid-2 gap-4 mar-b-4">
      <button onClick={errorString}>
        Error String
      </button>
      <button onClick={errorStrings}>
        Error Strings
      </button>
      <button onClick={errorObjects}>
        Error Objects
      </button>
      <button onClick={errorLabels}>
        Labelled Errors
      </button>
      <button onClick={errorFields}>
        Field Errors
      </button>
    </div>
  )
}

export default ErrorsExample