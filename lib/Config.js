import { splitHash } from '@abw/badger-utils'
import {
  DISABLED, ERRORS, FIELD, FOCUS, FORMULA, INVALID, OPTIONAL,
  REQUIRED, REQUIRED_MSG, SUBMITTING, VALID, VALIDATING
} from './Constants.jsx'

// default properties for a form
export const formDefaultProperties = {
  className:         FORMULA,
  submittingClass:   SUBMITTING,
  validatingClass:   VALIDATING,
  headerClass:       'header',
  bodyClass:         'body',
  footerClass:       'footer',
  errorsClass:       ERRORS,
  errorsInHeader:    true,
  resetOnSuccess:    true,
  focusInvalidField: true,
  enctype:           'application/x-www-form-urlencoded',
  method:            'post',
  errorsTitle:       n => `Form Submission Error${n > 1 ? 's' : ''}`,
  errorsPrompt:      n => `Please correct ${n === 1 ? 'this problem' : 'these problems'} and re-submit:`,
}

// default properties for a field
export const fieldDefaultProperties = {
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


// properties that can be defined on the form and are inherited by fields
export const formFieldProperties = splitHash([
  'showRequired', 'requiredText',
  'showOptional', 'optionalText',
  'validateOnChange', 'validateOnBlur', 'validateOnInvalid',
  'minValidateLength', 'validMessage', 'requiredMessage',
  'fieldClass', 'focusClass', 'validClass', 'invalidClass', 'disabledClass',
])
