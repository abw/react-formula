import React from 'react'
import DefaultError from './Error.jsx'
import { useForm } from './Context.js'
import { Themed } from '../Theme.jsx'

const Errors = () => {
  const form = useForm()
  const {
    error,
    errors,
    errorsClass,
    errorsTitle,
    errorsPrompt,
    Error=DefaultError
  } = form
  const hasError = Boolean(error)
  const n = errors.length + (hasError ? 1 : 0)

  if (n === 0 ) {
    return null
  }

  return (
    <div className={errorsClass}>
      { Boolean(errorsTitle) && <h3>{errorsTitle(n)}</h3> }
      { hasError && <h4><Error error={error}/></h4> }
      { errors.length !== 0 &&
        <>
          { Boolean(errorsPrompt) && <p>{errorsPrompt(errors.length)}</p>}
          <ul>
            { errors.map(
              (error, n) =>
                <li key={n}>
                  <Error error={error}/>
                </li>
            )}
          </ul>
        </>
      }
    </div>
  )
}

export default Themed(Errors, 'Form.Errors')

