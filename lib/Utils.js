export function isDefined(value) {
  return typeof value !== 'undefined' && value !== null
}

export function inputAttrs(field) {
  return [
    'id',
    'name',
    'value',
    'checked',
    'disabled',
    'placeholder',
    'autoComplete',
    'onFocus',
    'onBlur',
    'size',
    'min',
    'max',
    'minLength',
    'maxLength',
    'step',
    'pattern',
    'list',
  ].reduce(
    (hash, a) => {
      if (isDefined(field[a])) {
        hash[a] = field[a]
      }
      return hash
    },
    { }
  )
}