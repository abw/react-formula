import React from 'react'
import { formAttrs, propClasses } from '../Utils.js'
import { useForm } from './Context.js'
import { INVALID, SUBMITTING, VALID, VALIDATING } from '../Constants.jsx'

export const Layout = ({children}) => {
  const form = useForm()
  // console.log('form layout useForm: ', form)
  const {
    className,
    validClass,
    invalidClass,
    validatingClass,
    submittingClass,
  } = form.config

  const classes = propClasses(
    form.status,
    {
      [VALID]:      validClass,
      [INVALID]:    invalidClass,
      [VALIDATING]: validatingClass,
      [SUBMITTING]: submittingClass
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

