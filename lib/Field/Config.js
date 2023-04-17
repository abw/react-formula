import {
  CHANGED, INVALID, VALID, VALIDATING, RESET, REQUIRED, OPTIONAL,
  FOCUS, BLUR, FIELD, DISABLED, REQUIRED_MSG
} from '../Constants.jsx'

export const defaultConfig = {
  validateOnChange:  false,
  validateOnBlur:    false,
  validateOnInvalid: true,
  showRequired:      false,
  showOptional:      false,
  disabled:          false,
  required:          false,
  validate:          false,
  validMessage:      null,
  minValidateLength: 1,
  requiredMessage:   REQUIRED_MSG,
  requiredText:      REQUIRED,
  optionalText:      OPTIONAL,
  fieldClass:        FIELD,
  validClass:        VALID,
  invalidClass:      INVALID,
  disabledClass:     DISABLED,
  focusClass:        FOCUS,
  //className:         FORMULA,
  // TODO labelClass, etc.
  // submittingClass:   SUBMITTING,
  // validatingClass:   VALIDATING,

  //  initialValue: null,
}

export const defaultStatus = {
  [FOCUS]:      false,
  [CHANGED]:    false,
  [VALIDATING]: false,
  [VALID]:      false,
  [INVALID]:    false,
}

export const stateStatus = {
  [FOCUS]:      { [FOCUS]: true },
  [BLUR]:       { [FOCUS]: false },
  [RESET]:      { [VALID]: false, [INVALID]: false, [CHANGED]: false },
  [CHANGED]:    { [VALID]: false, [INVALID]: false, [CHANGED]: true },
  [VALIDATING]: { [VALID]: false, [INVALID]: false, [VALIDATING]: true },
  [VALID]:      { [VALID]: true,  [INVALID]: false, [VALIDATING]: false },
  [INVALID]:    { [VALID]: false, [INVALID]: true,  [VALIDATING]: false },
}
