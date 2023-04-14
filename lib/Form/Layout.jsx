import React from 'react'
import { formAttrs, propClasses } from '../Utils.js'
import { useForm } from './Context.js'

export const Layout = ({children}) => {
  const form = useForm()
  // console.log('form layout useForm: ', form)
  const {
    className,
    validClass,
    invalidClass,
    validatingClass,
    submittingClass,
  } = form.options

  const classes = propClasses(
    form.status,
    {
      valid:      validClass,
      invalid:    invalidClass,
      validating: validatingClass,
      submitting: submittingClass
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

