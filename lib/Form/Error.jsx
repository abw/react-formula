import React from 'react'
import { isString } from '@abw/badger-utils'

export const Error = ({error}) =>
  isString(error)
    ? error
    : <>
        <b>{error.label||error.name}:</b> {error.message}
      </>

export default Error

