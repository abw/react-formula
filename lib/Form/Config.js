// import { baseStatus, statusUnvalidated } from '../Base/Status.js'
import { FORMULA, SUBMITTING, VALIDATING } from '../Constants.jsx'
import { inheritableConfig } from '../Field/Config.js'

// NOTE: this is being deprecated and refactored into ../Config.js

export const defaultConfig = {
  ...inheritableConfig,
  className:         FORMULA,
  errorsInHeader:    true,
  errorsInFooter:    false,
  enctype:           'application/x-www-form-urlencoded',
  method:            'post',
  headerClass:       'header',
  bodyClass:         'body',
  footerClass:       'footer',
  errorsClass:       'errors',
  resetOnSuccess:    true,
  focusInvalidField: true,
  errorsTitle:       n => `Form Submission Error${n > 1 ? 's' : ''}`,
  // errorPrompt:       'Please correct this problem and re-submit:',
  errorsPrompt:      n => `Please correct ${n === 1 ? 'this problem' : 'these problems'} and re-submit:`,
  submittingClass:   SUBMITTING,
  validatingClass:   VALIDATING,
}

