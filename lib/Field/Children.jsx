import React from 'react'
import DefaultLayout from './Layout.jsx'
import { isFunction } from '@abw/badger-utils'
import { Context, Consumer } from './Context.js'
import { toArray } from '../Utils.js'

export const FieldChildren = ({
  children,
  Layout=DefaultLayout
}) =>
  children
    ? toArray(children).map(
      (child, n) => isFunction(child)
        ? <Context.Consumer key={n}>
            {child}
          </Context.Consumer>
        : child
    )
    : <Layout/>

export default Consumer(FieldChildren)
