import React from 'react'
import { useForm } from './Context.js'
import { formAttrs, propClasses } from '../Utils.js'
import { INVALID, SUBMITTING, VALID, VALIDATING } from '../Constants.jsx'
import DefaultHeader from './Header.jsx'
import DefaultFooter from './Footer.jsx'

export const Layout = ({children}) => {
  const form = useForm()
  // console.log('form layout useForm: ', form)
  const {
    className,
    bodyClass,
    validClass,
    invalidClass,
    validatingClass,
    submittingClass,
    Header=DefaultHeader,
    Footer=DefaultFooter,
  } = form

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
      <Header/>
      <div className={bodyClass}>
        {children}
      </div>
      <Footer/>
    </form>
  )
}

export default Layout

