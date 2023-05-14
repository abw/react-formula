import React from 'react'
import PrevNext from './PrevNext.jsx'
import { TutorialMenu } from './Menus.jsx'

export const TutorialPager = ({uri}) => {
  const index = TutorialMenu.items.findIndex(
    item => item[0] === uri
  )
  if (index < 0) {
    throw `Invalid tutorial page URI: ${uri}`
  }
  const [prevLink, prevText] = index > 0
    ? TutorialMenu.items[index - 1]
    : [ ]
  const [nextLink, nextText] = index < TutorialMenu.items.length - 1
    ? TutorialMenu.items[index + 1]
    : [ ]

  return (
    <PrevNext
      prevLink={prevLink && `/tutorial/${prevLink}`} prevText={prevText}
      nextLink={nextLink && `/tutorial/${nextLink}`} nextText={nextText}
    />
  )
}

