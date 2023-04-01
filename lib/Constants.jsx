export const DEFAULT     = 'default'
export const BLANK       = ''

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

