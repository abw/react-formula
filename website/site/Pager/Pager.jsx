import React from 'react'
import PrevNext from './PrevNext.jsx'

export const Pager = ({uri, menu}) => {
  const index = menu.items.findIndex(
    item => item[0] === uri
  )
  if (index < 0) {
    throw `Invalid page URI: ${uri}`
  }
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