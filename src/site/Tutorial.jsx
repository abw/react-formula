import React from 'react'
import PrevNext from './PrevNext.jsx'

export const TutorialMenu = [
  ['simple-form',         'Defining a Form'],
  ['field-validation',    'Field Validation'],
  ['form-validation',     'Form Validation'],
  ['form-submission',     'Form Submission'],
  ['submission-response', 'Submission Response'],
  ['submission-errors',   'Submission Errors'],
  ['complete-example',    'Complete Example'],
]

export const TutorialPager = ({uri}) => {
  const index = TutorialMenu.findIndex(
    item => item[0] === uri
  )
  if (index < 0) {
    throw `Invalid tutorial page URI: ${uri}`
  }
  const [prevLink, prevText] = index > 0
    ? TutorialMenu[index - 1]
    : [ ]
  const [nextLink, nextText] = index < TutorialMenu.length - 1
    ? TutorialMenu[index + 1]
    : [ ]

  return (
    <PrevNext
      prevLink={prevLink && `/tutorial/${prevLink}`} prevText={prevText}
      nextLink={nextLink && `/tutorial/${nextLink}`} nextText={nextText}
    />
  )
}

