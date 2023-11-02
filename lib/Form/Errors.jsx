import React from 'react'
import DefaultError from './Error.jsx'
import { useForm } from './Context.js'
import { Themed } from '../Theme.jsx'
import { maybeFunction, selectClass } from '../Utils.js'

const Errors = ({
  title,
  prompt,
  fieldErrors=true
}) => {
  const form = useForm()
  const {
    error,
    errors,
    classes,
    errorsTitle,
    errorsPrompt,
    Error=DefaultError
  } = form
  const hasError = Boolean(error)
  const n = (fieldErrors ? errors.length : 0) + (hasError ? 1 : 0)
  const className = selectClass(classes, 'error alert border')

  title  ||= errorsTitle
  prompt ||= errorsPrompt

  if (n === 0 ) {
    return null
  }

  return (
    <div className={className}>
      { Boolean(title) &&
        <div className="headline">{maybeFunction(title, n)}</div>
      }
      <div>
        { hasError && <h4><Error error={error}/></h4> }
        { fieldErrors && errors.length !== 0 &&
          <>
            { Boolean(prompt) &&
              <p className="wide">{maybeFunction(prompt, errors.length)}</p>
            }
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
    </div>
  )
}

export default Themed(Errors, 'Form.Errors')

