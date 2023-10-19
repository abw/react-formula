import React from 'react'
import PrevNext from './PrevNext.jsx'
import { isArray, isString } from '@abw/badger-utils'
// import { resolveMenuItem } from '../MenuItem.jsx'

export const Pager = ({uri, menu}) => {
  const index = menu.items.findIndex(
    item => isString(item)
      ? item === uri
      : isArray(item)
        ? item[0] === uri
        : false
  )
  // console.log(`menu items: `, menu.items)

  if (index < 0) {
    throw `Invalid page URI: ${uri}`
  }
  /*
  console.log(`found item: `, menu.items[index])
  const prev = index > 0
    ? menu.items[index - 1]
    : [ ]
  const next = index < menu.items.length - 1
    ? menu.items[index + 1]
    : [ ]

  console.log(`prev: `, prev)
  console.log(`next: `, next)
  console.log(`resolved prev`, resolveMenuItem(prev))
  const { prevLink, prevText } = resolveMenuItem(prev)
  const { nextLink, nextText } = resolveMenuItem(next)
  */

  const [prevLink, prevText] = index > 0
    ? menu.items[index - 1]
    : [ ]
  const [nextLink, nextText] = index < menu.items.length - 1
    ? menu.items[index + 1]
    : [ ]

  return (
    <PrevNext
      prevLink={prevLink && `${menu.url}/${prevLink}`} prevText={prevText}
      nextLink={nextLink && `${menu.url}/${nextLink}`} nextText={nextText}
    />
  )
}

export default Pager