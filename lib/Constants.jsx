export const ATTACH_FIELD = 'attach_field'
export const DETACH_FIELD = 'detach_field'
export const BLANK        = ''
export const BLUR         = 'blur'
export const BLURRED      = 'blurred'    // ??
// export const CANCEL       = 'cancel'
export const CHANGED      = 'changed'
export const CHECKBOX     = 'checkbox'
export const CONTROLS     = 'controls'
// export const DEBUG        = 'debug'
export const DEFAULT      = 'default'
export const DISABLED     = 'disabled'
export const ERROR        = 'error'
export const ERRORS       = 'errors'
export const FIELD        = 'field'
export const FOCUS        = 'focus'
export const FOCUSSED     = 'focussed'   // ??
export const FORMULA      = 'formula'
export const FULFILLED    = 'fulfilled'
export const INVALID      = 'invalid'
export const OPTIONAL     = 'Optional'
export const RADIO        = 'radio'
export const REJECTED     = 'rejected'
export const REQUIRED     = 'Required'
export const REQUIRED_MSG = 'A value is required'
export const RESET        = 'reset'
export const SELECT       = 'select'
export const SET          = 'set'
export const SET_VALUE    = 'set_value'
export const SET_VALUES   = 'set_values'
export const SET_FIELD    = 'set_field'
// export const SUBMIT       = 'submit'
export const SUBMITTED    = 'submitted'
export const SUBMITTING   = 'submitting'
export const TEXT         = 'text'
export const TEXTAREA     = 'textarea'
export const VALID        = 'valid'
export const VALIDATING   = 'validating'
export const VALIDATED    = 'validated'

export const INPUT_ATTRS = [
  'id', 'name', 'value', 'checked', 'disabled', 'placeholder',
  'autoComplete', 'onFocus', 'onBlur', 'size', 'min', 'max', 'minLength',
  'maxLength', 'step', 'pattern', 'list'
]
export const FORM_ATTRS = [
  'id', 'name', 'action', 'method', 'encType'
]

// options can be defined as an array of simple booleans, strings, or numbers,
// e.g. options = [ true, 'yes', 23 ], otherwise they must be objects
// containing value and text, e.g. options = [ { value: 11, text: 'eleven}, ... ]
export const valueTypes = {
  boolean: true,
  string:  true,
  number:  true,
}

