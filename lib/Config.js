import { splitHash } from '@abw/badger-utils'
import {
  ERRORS, OPTIONAL,
  REQUIRED, REQUIRED_MSG, SUBMITTING, VALIDATING
} from './Constants.jsx'

// default properties for a form
export const formDefaultProperties = {
  // className:         FORMULA,
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
  requiredLabel:     REQUIRED,
  optionalLabel:     OPTIONAL,
}


// properties that can be defined on the form and are inherited by fields
export const formFieldProperties = splitHash([
  'showRequired', 'requiredLabel',
  'showOptional', 'optionalLabel',
  'validateOnChange', 'validateOnBlur', 'validateOnInvalid',
  'minValidateLength', 'validMessage', 'requiredMessage',
  'classes',
])

