import {
  CHANGED, FORMULA, INVALID, SUBMITTING, SUBMITTED, VALID, VALIDATING, RESET,
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
  className:          FORMULA,
  errorsInHeader:    true,
  errorsInFooter:    false,
  enctype:           'application/x-www-form-urlencoded',
  method:            'post',
  submittingClass:    SUBMITTING,
  validatingClass:    VALIDATING,
}

export const defaultStatus = {
  [CHANGED]:    false,
  [VALIDATING]: false,
  [VALID]:      false,
  [INVALID]:    false,
  [SUBMITTING]: false,
  [SUBMITTED]:  false,
}

export const stateStatus = {
  [RESET]:      { [VALID]: false, [INVALID]: false, [CHANGED]: false },
  [CHANGED]:    { [VALID]: false, [INVALID]: false, [CHANGED]: true },
  [VALIDATING]: { [VALID]: false, [INVALID]: false, [VALIDATING]: true },
  [VALID]:      { [VALID]: true,  [INVALID]: false, [VALIDATING]: false },
  [INVALID]:    { [VALID]: false, [INVALID]: true,  [VALIDATING]: false },
  [SUBMITTING]: { [SUBMITTING]: true  },
  [SUBMITTED]:  { [SUBMITTING]: false }
}
