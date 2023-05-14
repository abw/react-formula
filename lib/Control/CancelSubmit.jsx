import React from 'react'
import Cancel from './Cancel.jsx'
import Submit from './Submit.jsx'
import { Themed } from '../Theme.jsx'

const CancelSubmit = ({
  className='controls',
  cancel={},
  submit={}
}) =>
  <div className={className}>
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default Themed(CancelSubmit, 'Form.CancelSubmit')