import React from 'react'
import Pager from './Pager.jsx'
import { FieldMenu } from '../Menus.jsx'

const FieldPager = ({uri}) =>
  <Pager uri={uri} menu={FieldMenu}/>

export default FieldPager