// import { baseStatus, statusUnvalidated } from '../Base/Status.js'
import { propClasses } from '../Utils.js'
import {
  CHANGED, INVALID, VALID, VALIDATING, REQUIRED, OPTIONAL,
  FOCUS, BLUR, FIELD, DISABLED, REQUIRED_MSG, RESET
} from '../Constants.jsx'

// NOTE: this is being deprecated in favour of ../Config.js

export const inheritableConfig = {
  validateOnChange:  false,
  validateOnBlur:    false,
  validateOnInvalid: true,
  showRequired:      false,
  showOptional:      false,
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
}

export const defaultConfig = {
  ...inheritableConfig,
  disabled:     false,
  required:     false,
  validate:     false,
}

/*
export const defaultStatus = {
  ...statusUnvalidated,
  [CHANGED]:    false,
  [VALIDATING]: false,
  [FOCUS]:      false,
}

export const stateStatus = {
  ...baseStatus,
  [RESET]: defaultStatus,
  [FOCUS]: { [FOCUS]: true },
  [BLUR]:  { [FOCUS]: false },
}
*/

export const fieldClass = field => {
  const {
    status,
    disabled,
    className,
    fieldClass,
    validClass,
    invalidClass,
    disabledClass,
    focusClass,
  } = field
  return propClasses(
    status,
    {
      [VALID]:    validClass,
      [INVALID]:  invalidClass,
      [FOCUS]:    focusClass,
      [DISABLED]: disabledClass
    },
    fieldClass, className,
    // disabled ? disabledClass : null
  )
}