import React from 'react'
import { isFunction } from '@abw/badger-utils'
import { Context } from './Context.js'
import { toArray } from '../Utils.js'

export const Children = ({
  children
}) =>
  toArray(children).map(
    (child, n) => isFunction(child)
      ? <Context.Consumer key={n}>
          {child}
        </Context.Consumer>
      : child
  )

export default Children
