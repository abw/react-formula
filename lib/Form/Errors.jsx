import React from 'react'
import DefaultError from './Error.jsx'
import { useForm } from './Context.js'
import { Themed } from '../Theme.jsx'
import { maybeFunction, selectClass } from '../Utils.js'

const Errors = ({
  title,
  prompt
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
  const n = errors.length + (hasError ? 1 : 0)
  const className = selectClass(classes, 'error alert border')

  title  ||= errorsTitle
  prompt ||= errorsPrompt

  if (n === 0 ) {
    return null
  }

  console.log(`prompt: `, prompt)
  console.log(`hasError: `, hasError)
  console.log(`errors.length: `, errors.length)

  return (
    <div className={className}>
      { Boolean(title) &&
        <div className="headline">{maybeFunction(title, n)}</div>
      }
      <div>
        { hasError && <h4><Error error={error}/></h4> }
        { errors.length !== 0 &&
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

