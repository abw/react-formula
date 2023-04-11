import React from 'react'
import { FORMULA, INVALID, SAVING, VALID, VALIDATING } from '../Constants.jsx'
import { formAttrs, propClasses } from '../Utils.js'
import { useForm } from './Context.js'

export const Layout = ({children}) => {
  const form = useForm()
  // console.log('form layout useForm: ', form)
  const {
    className       = FORMULA,
    validClass      = VALID,
    savingClass     = SAVING,
    invalidClass    = INVALID,
    validatingClass = VALIDATING,
  } = form

  const classes = propClasses(
    form,
    {
      valid:      validClass,
      saving:     savingClass,
      invalid:    invalidClass,
      validating: validatingClass
    },
    className
  )

  const attrs = formAttrs(form)

  return (
    <form className={classes} {...attrs}>
      {children}
    </form>
  )
}

export default Layout

