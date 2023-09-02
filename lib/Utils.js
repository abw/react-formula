import { hasValue, isBoolean, isObject } from '@abw/badger-utils'
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
export const joinClasses = classes => classes.filter(hasValue).join(' ')

export const setKeys = props =>
  Object.entries(props)
    .filter( ([ , value]) => value )
    .map( ([key]) => key )

export const classes = (...inputs) => joinClasses(
  inputs.flatMap(
    input =>
      isObject(input)
        ? setKeys(input)
        : input
  )
)

export const selectClass = (classes, name, defaultClass=name) =>
  classes?.[name] || defaultClass

export const selectClasses = (classes, ...names) =>
  joinClasses(
    names.map( name => selectClass(classes, name) )
  )

export const propClasses = (props, spec, ...more) =>
  joinClasses(
    Object.entries(spec).reduce(
      (classes, [prop, cls]) => {
        if (props[prop]) {
          classes.push(cls)
        }
        return classes
      },
      [...more]
    )
  )

export const statusClasses = (status, classes={}, ...more) =>
  joinClasses(
    Object.entries(status).reduce(
      (all, [name, set]) => {
        if (set) {
          all.push(classes[name] || name)
        }
        return all
      },
      [...more]
    )
  )

export const fieldClass = field => {
  const {
    status,
    className,
    classes,
    required,
    showRequired,
    showOptional
  } = field
  //const showRequired = field.showRequired  && field.required
  //const showOptional = field.showOptional  && ! field.required

  return statusClasses(
    status,
    classes,
    selectClass(classes, 'field'),
    className,
    (showRequired && required) ? 'required' : null,
    (showOptional && ! required) ? 'optional' : null,
  )
}

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