import { ValidateOnBlurLink, ValidateOnChangeLink } from '@/website/site/Links.jsx'
import React          from 'react'

const ValidateOnInvalidExamples = () =>
  <div className="prose">
    <h1>Field Validation</h1>
    <h2><code>validateOnInvalid</code></h2>
    <p>
      Fields are normally validated when the form is submitted.
      The <ValidateOnChangeLink/> and <ValidateOnBlurLink/> options can
      be set to change this.
    </p>
    <p>
      If a field fails validation it will then switch to validating on
      change.  This option can be set to <code>false</code> to prevent
      this behaviour.
    </p>
  </div>


export default ValidateOnInvalidExamples