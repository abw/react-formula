import React from 'react'
import InputTypes from '../Input/index.js'
import DefaultPrefix from './Prefix.jsx'
import DefaultSuffix from './Suffix.jsx'
import { useField } from './Context.js'
import { Themed } from '../Theme.jsx'
import { selectClass } from '../Utils.js'
import { hasValue } from '@abw/badger-utils'
import { RADIO, TEXT } from '../Constants.jsx'

const Input = ({ field=useField() }) => {
  const {
    classes, prefix, suffix, inputsClass, wide,
    type=TEXT,
    Prefix=DefaultPrefix,
    Suffix=DefaultSuffix,
  } = field
  const Type = InputTypes[type] || InputTypes.default
  let classNames = [
    selectClass(classes, 'inputs'),
    selectClass(classes, type)
  ]
  if (hasValue(prefix)) {
    classNames.push(selectClass(classes, 'prefixed'))
  }
  if (hasValue(suffix)) {
    classNames.push(selectClass(classes, 'suffixed'))
  }
  if (wide) {
    classNames.push(selectClass(classes, 'wide'))
  }
  if (hasValue(inputsClass)) {
    classNames.push(inputsClass)
  }
  const className = classNames.join(' ')

  if (type == RADIO) {
    return <Type field={field}/>
  }

  return (
    <div className={className}>
      { hasValue(prefix) && <Prefix field={field}/> }
      <Type field={field}/>
      { hasValue(suffix) && <Suffix field={field}/> }
    </div>
  )
}

export default Themed(Input, 'Form.Field.Input')
