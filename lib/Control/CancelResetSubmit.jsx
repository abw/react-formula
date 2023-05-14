import React from 'react'
import Cancel from './Cancel.jsx'
import Reset from './Reset.jsx'
import Submit from './Submit.jsx'
import { Themed } from '../Theme.jsx'

const CancelResetSubmit = ({
  className='controls',
  cancel={},
  reset={},
  submit={}
}) =>
  <div className={className}>
    <div>
      <Cancel {...cancel}/>
      <Reset {...reset}/>
    </div>
    <Submit {...submit}/>
  </div>

export default Themed(CancelResetSubmit, 'Form.CancelResetSubmit')