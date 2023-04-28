import { baseStatus, statusUnvalidated } from '../Base/Status.js'
import {
  CHANGED, FORMULA, SUBMITTING, SUBMITTED, VALIDATING, RESET, INVALID, VALID
} from '../Constants.jsx'
import { defaultConfig as defaultFieldConfig } from '../Field/Config.js'
export const defaultConfig = {
  ...defaultFieldConfig,
  /*
  validateOnChange:  false,
  validateOnBlur:    true,
  showRequired:      false,
  showOptional:      false,
  requiredText:      REQUIRED,
  optionalText:      OPTIONAL,
  validClass:         VALID,
  invalidClass:       INVALID,
  */
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

export const defaultStatus = {
  ...statusUnvalidated,
  [CHANGED]:    false,
  [VALIDATING]: false,
  [SUBMITTING]: false,
  [SUBMITTED]:  false,
}

export const stateStatus = {
  ...baseStatus,
  [RESET]:      defaultStatus,
  [SUBMITTING]: { [SUBMITTING]: true,  [SUBMITTED]: false },
  [SUBMITTED]:  { [SUBMITTING]: false, [SUBMITTED]: true  },
  [INVALID]:    { ...baseStatus[INVALID], [SUBMITTING]: false },
  [VALID]:      { ...baseStatus[VALID],   [SUBMITTING]: false },
}
