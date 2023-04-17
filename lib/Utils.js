import { FORM_ATTRS, INPUT_ATTRS, valueTypes } from './Constants.jsx'

export function isDefined(value) {
  return typeof value !== 'undefined' && value !== null
}

export function isString(value) {
  return typeof value === 'string'
}

export function isArray(value) {
  return Array.isArray(value)
}

export function splitList(value) {
  if (! isDefined(value)) {
    return [ ]
  }
  if (isString(value)) {
    return value.length
      ? value.split(/,\s*|\s+/)
      : [ ]
  }
  if (isArray(value)) {
    return value
  }
  return [value]
}

export function attrs(props, list) {
  return list.reduce(
    (hash, a) => {
      if (isDefined(props[a])) {
        hash[a] = props[a]
      }
      return hash
    },
    { }
  )
}

export const inputAttrs = field => attrs(field, INPUT_ATTRS)
export const formAttrs  = form => attrs(form, FORM_ATTRS)
export const propClasses = (props, spec, ...base) =>
  Object.entries(spec).reduce(
    (classes, [prop, cls]) => {
      if (props[prop]) {
        classes.push(cls)
      }
      return classes
    },
    [...base]
  ).filter(i => i).join(' ')

export const valueOption = option =>
  valueTypes[typeof option]
    ? { value: option, text: option }
    : option

export function mixin(that, methods) {
  Object.entries(methods).forEach(
    ([name, method]) => {
      that[name] ||= method
    }
  )
}

export const doNothing = () => { }

export const passValue = value => value

export const sleep = ms => new Promise(r => setTimeout(r, ms))

export const callFunctions = (...functions) => function(...args) {
  for (let fn of functions.filter(isDefined)) {
    fn(...args)
  }
}

export function fail(...message) {
  throw new Error(message.join(''))
}