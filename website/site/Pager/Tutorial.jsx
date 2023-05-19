import React from 'react'
import Pager from './Pager.jsx'
import { TutorialMenu } from '../Menus.jsx'

const TutorialPager = ({uri}) =>
  <Pager uri={uri} menu={TutorialMenu}/>

export default TutorialPager