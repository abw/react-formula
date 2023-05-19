import React from 'react'
import Pager from './Pager.jsx'
import { IntroductionMenu } from '../Menus.jsx'

const IntroductionPager = ({uri}) =>
  <Pager uri={uri} menu={IntroductionMenu}/>

export default IntroductionPager