import {
  CHANGED, FORMULA, INVALID, SUBMITTING, SUBMITTED, VALID, VALIDATING, RESET, REQUIRED, OPTIONAL
} from '../Constants.jsx'

export const defaultOptions = {
  validateOnChange:  false,
  validateOnBlur:    true,
  errorsInHeader:    true,
  errorsInFooter:    false,
  showRequired:      false,
  showOptional:      false,
  requiredText:      REQUIRED,
  optionalText:      OPTIONAL,
  enctype:           'application/x-www-form-urlencoded',
  method:            'post',
  className:          FORMULA,
  validClass:         VALID,
  invalidClass:       INVALID,
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
