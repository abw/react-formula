import React from 'react'
import Cancel from './Cancel.jsx'
import Reset from './Reset.jsx'
import Submit from './Submit.jsx'
import { Themed } from '../Theme.jsx'
import { flexGapSpaceClasses } from '../Utils.js'
import { CONTROLS } from '../Constants.jsx'

const CancelResetSubmit = ({
  className,
  gap=4,
  space=false,
  cancel={},
  reset={},
  submit={}
}) =>
  <div className={flexGapSpaceClasses({ className, gap, space }, CONTROLS)}>
    <div>
      <Cancel {...cancel}/>
      <Reset {...reset}/>
    </div>
    <Submit {...submit}/>
  </div>

export default Themed(CancelResetSubmit, 'Form.CancelResetSubmit')