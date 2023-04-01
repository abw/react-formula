export const BLANK       = ''
export const BLUR        = 'blur'
export const DEFAULT     = 'default'
export const FOCUS       = 'focus'
export const FORMULA     = 'formula'
export const INVALID     = 'invalid'
export const RESET       = 'reset'
export const SAVING      = 'saving'
export const SET         = 'set'
export const SET_FIELD   = 'set_field'
export const USE_FIELD   = 'use_field'
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

