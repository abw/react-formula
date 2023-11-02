import React from 'react'
import DefaultError from './Error.jsx'
import { useForm } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'

const Errors = () => {
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

  if (n === 0 ) {
    return null
  }

  return (
    <div className={className}>
      { Boolean(errorsTitle) &&
        <div className="headline">{errorsTitle(n)}</div>
      }
      <div>
        { hasError && <h4><Error error={error}/></h4> }
        { errors.length !== 0 &&
          <>
            { Boolean(errorsPrompt) &&
              <p className="wide">{errorsPrompt(errors.length)}</p>
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

