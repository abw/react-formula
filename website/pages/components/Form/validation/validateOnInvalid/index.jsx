import React from 'react'
import { ValidateOnInvalidLink } from '@/website/site/Links.jsx'

const ValidateOnChangeExamples = () =>
  <div className="prose flow">
    <h1>Form Validation</h1>
    <h2><code>validateOnInvalid</code></h2>
    <p>
      This option is set <code>true</code> by default.
      You can set the <ValidateOnInvalidLink/> property
      to <code>false</code> on individual fields, or on the form to
      set it as the default for all fields.
    </p>
    <p>
      If a field fails validation then this option switches it to
      validate whenever the input changes.
    </p>
  </div>

export default ValidateOnChangeExamples