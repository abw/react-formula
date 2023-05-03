// import { baseStatus, statusUnvalidated } from '../Base/Status.js'
import { propClasses } from '../Utils.js'
import {
  INVALID, VALID, REQUIRED, OPTIONAL,
  FOCUS, FIELD, DISABLED, REQUIRED_MSG,
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

export const fieldClass = field => {
  const {
    status,
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
  )
}