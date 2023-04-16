import {
  CHANGED, FORMULA, INVALID, VALID, VALIDATING, RESET, REQUIRED, OPTIONAL,
  FOCUS, BLUR, FIELD, DISABLED, REQUIRED_MSG
} from '../Constants.jsx'

export const defaultConfig = {
  validateOnChange:  false,
  validateOnBlur:    true,
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
  className:         FORMULA,
  fieldClass:        FIELD,
  validClass:        VALID,
  invalidClass:      INVALID,
  disabledClass:     DISABLED,
  focusClass:        FOCUS,
  // TODO labelClass, etc.
  // submittingClass:   SUBMITTING,
  // validatingClass:   VALIDATING,

  //  initialValue: null,
  //  validateOnInvalid: true,
  //  requiredMessage: 'A value is required',
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
