import {
  CHANGED, FORMULA, INVALID, SUBMITTING, SUBMITTED, VALID, VALIDATING, RESET
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
  errorsTitle:       n => `Form Submission Error${n > 1 ? 's' : ''}`,
  errorPrompt:       'Please correct this problem and re-submit:',
  errorsPrompt:      n => `Please correct these ${n} problems and re-submit:`,
  submittingClass:   SUBMITTING,
  validatingClass:   VALIDATING,
}

export const statusUnvalidated = {
  [VALID]:    false,
  [INVALID]:  false,
}
export const defaultStatus = {
  [CHANGED]:    false,
  [VALIDATING]: false,
  [SUBMITTING]: false,
  [SUBMITTED]:  false,
  ...statusUnvalidated,
}

export const stateStatus = {
  [RESET]:      { ...statusUnvalidated, [CHANGED]: false },
  [CHANGED]:    { ...statusUnvalidated, [CHANGED]: true },
  [VALIDATING]: { ...statusUnvalidated, [VALIDATING]: true },
  [VALID]:      { [VALID]: true,  [INVALID]: false, [VALIDATING]: false },
  [INVALID]:    { [VALID]: false, [INVALID]: true,  [VALIDATING]: false },
  [SUBMITTING]: { [SUBMITTING]: true  },
  [SUBMITTED]:  { [SUBMITTING]: false }
}
