import { hasValue, isBoolean } from '@abw/badger-utils'
import { FORM_ATTRS, INPUT_ATTRS, valueTypes } from './Constants.jsx'

export function attrs(props, list) {
  return list.reduce(
    (hash, a) => {
      if (hasValue(props[a])) {
        hash[a] = props[a]
      }
      return hash
    },
    { }
  )
}

export const inputAttrs = field => attrs(field, INPUT_ATTRS)
export const formAttrs  = form => attrs(form, FORM_ATTRS)

export const propClasses = (props, spec, ...more) =>
  Object.entries(spec).reduce(
    (classes, [prop, cls]) => {
      if (props[prop]) {
        classes.push(cls)
      }
      return classes
    },
    [...more]
  ).filter(i => i).join(' ')

export const valueOption = option =>
  valueTypes[typeof option]
    ? { value: option, text: option }
    : option

export const passValue = value => value

export const callFunctions = (...functions) => function(...args) {
  for (let fn of functions.filter(hasValue)) {
    fn(...args)
  }
}

export function lengthEmpty(value) {
  if (isBoolean(value)) {
    return [1, ! value]
  }
  else if (hasValue(value)) {
    const length = value?.toString().length ?? 0
    const empty  = length === 0
    return [length, empty]
  }
  return [0, true]
}