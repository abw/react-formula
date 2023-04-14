export const ATTACH_FIELD = 'attach_field'
export const DETACH_FIELD = 'detach_field'
export const BLANK       = ''
export const BLUR        = 'blur'
export const CHANGED     = 'changed'
export const DEFAULT     = 'default'
export const FOCUS       = 'focus'
export const FORMULA     = 'formula'
export const INVALID     = 'invalid'
export const OPTIONAL    = 'Optional'
export const REQUIRED    = 'Required'
export const RESET       = 'reset'
export const SET         = 'set'
export const SET_VALUE   = 'set_value'
export const SET_VALUES  = 'set_values'
export const SET_FIELD   = 'set_field'
export const SUBMITTED   = 'submitted'
export const SUBMITTING  = 'submitting'
export const VALID       = 'valid'
export const VALIDATING  = 'validating'
export const VALIDATED   = 'validated'

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

