import React from 'react'
import { isString } from '@abw/badger-utils'

export const Error = ({error}) =>
  isString(error)
    ? error
    : <ErrorObject error={error}/>

export const ErrorObject = ({error}) => {
  const label = error.label || error.name
  return (
    <>
      { Boolean(label) && <b>{label}: </b> }
      { error.message }
    </>
  )
}

export default Error

