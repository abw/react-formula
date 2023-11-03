import React from 'react'
import { MinValidateLengthLink } from '@/website/site/Links.jsx'

const MinValidateLength = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2><code>minValidateLength</code></h2>
    <p>
      This option can be set to provide a default value for the{' '}
      <MinValidateLengthLink/> option for all fields.
      Individual fields can set their own values to override it.
    </p>
  </div>

export default MinValidateLength