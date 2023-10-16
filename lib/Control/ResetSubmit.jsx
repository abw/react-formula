import React  from 'react'
import Reset  from './Reset.jsx'
import Submit from './Submit.jsx'
import { Themed } from '../Theme.jsx'
import { flexGapSpaceClasses } from '../Utils.js'
import { CONTROLS } from '../Constants.jsx'

const ResetSubmit = ({
  className,
  gap=4,
  space=false,
  reset={},
  submit={}
}) =>
  <div className={flexGapSpaceClasses({ className, gap, space }, CONTROLS)}>
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default Themed(ResetSubmit, 'Form.ResetSubmit')