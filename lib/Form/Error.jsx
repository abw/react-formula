import React from 'react'
import ErrorObject from './ErrorObject.jsx'
import { isString } from '@abw/badger-utils'

export const Error = ({error}) =>
  isString(error)
    ? error
    : <ErrorObject error={error}/>

export default Error

