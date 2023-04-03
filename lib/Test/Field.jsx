import React, { useEffect, useId } from 'react'
import FieldContext from '../Field/Context.jsx'
import useForm from './useForm.jsx'
// import DefaultLayout from '../Field/Layout.jsx'

export const Field = ({ name, children, ...spec }) => {
  const form     = useForm()
  const defaults = form.fields?.[name] || { }
  let   field    = { name, ...defaults, ...spec }
  field.id || useId()
  const Context = FieldContext(field, form)
  // form.useField(name, field)

  useEffect(
    () => {
      form.useField(name, field)
    },
    [field]
  )

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )

  /*
  console.log('calling useField for', name)
  // const field   = form.activeFields[name]

  useEffect(
    () => {
      if (! field) {
        console.log('no field, calling form.useField()')
        form.useField(name, spec)
      }
    },
    [field]
  )
  // const field   = form.useField(name, spec)
  // console.log('Field:', field)

  return field
    ? <>USING FIELD {field.name}</>
    : null
  */
  /*
  const Context = FieldContext(field)
  // const {render, Layout=DefaultLayout} = field

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
  */

  //return render
  //  ? render(field)
  //  : <Layout field={field}/>
}

export default Field

/*
import React from 'react'
import FormContext from '../Form/Context.jsx'
import { useId } from 'react'

export const Form = ({
  children,
  ...props
}) => {
  props.id ||= useId()
  const Context = FormContext(props)
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  )
}

export default Form
*/