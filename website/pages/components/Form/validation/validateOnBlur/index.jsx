import React from 'react'
import { ValidateOnBlurLink } from '@/website/site/Links.jsx'

const ValidateOnBlurExamples = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2><code>validateOnBlur</code></h2>
    <p>
      Fields are usually only validated when the form is submitted.
      You can set the <ValidateOnBlurLink/> property to <code>true</code>{' '}
      on individual fields, or on the form to set it as the default for all
      fields.
    </p>
    <p>
      When enabled, fields will be validated whenever the input loses focus.
    </p>

  </div>

export default ValidateOnBlurExamples