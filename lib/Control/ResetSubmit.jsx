import React  from 'react'
import Reset  from './Reset.jsx'
import Submit from './Submit.jsx'
import { Themed } from '../Theme.jsx'

const ResetSubmit = ({
  className='controls',
  reset={},
  submit={}
}) =>
  <div className={className}>
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default Themed(ResetSubmit, 'Form.ResetSubmit')