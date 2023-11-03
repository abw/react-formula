import React from 'react'
import { ValidateOnChangeLink } from '@/website/site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2><code>validateOnChange</code></h2>
    <p>
      Fields are usually only validated when the form is submitted.
      You can set the <ValidateOnChangeLink/> property
      to <code>true</code>{' '} on individual fields, or on the form to
      set it as the default for all fields.
    </p>
    <p>
      When enabled, fields will be validated whenever the input changes.
    </p>
  </div>

export default ValidateOnChangeExamples