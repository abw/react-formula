import React from 'react'
import DefaultError from './Error.jsx'
import { useForm } from './Context.js'

export const Errors = () => {
  const form = useForm()
  const {
    error,
    errors,
    errorsClass,
    errorsTitle,
    errorPrompt,
    errorsPrompt,
    Error=DefaultError
  } = form

  if (! error && errors.length === 0 ) {
    return null
  }

  const prompt = errors.length === 1
    ? errorPrompt
    : errorsPrompt(errors.length)

  return (
    <div className={errorsClass}>
      { Boolean(errorsTitle) && <h3>{errorsTitle(errors.length||1)}</h3> }
      { errors.length !== 0 &&
        <>
          { Boolean(prompt) && <p>{prompt}</p>}
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

export default Errors

