import React from 'react'
import { useForm } from './Context.js'
import { formAttrs } from '../Utils.js'
import DefaultHeader from './Header.jsx'
import DefaultFooter from './Footer.jsx'
import { statusClasses } from '../Utils.js'

export const Layout = ({children}) => {
  const form = useForm()
  // console.log('form layout useForm: ', form)
  const {
    submit,
    bodyClass,
    Header=DefaultHeader,
    Footer=DefaultFooter,
  } = form
  const className = statusClasses(
    form.status,
    form.classes,
    form.className
  )
  const attrs = formAttrs(form)

  return (
    <form className={className} {...attrs} onSubmit={submit}>
      <Header/>
      <div className={bodyClass}>
        {children}
      </div>
      <Footer/>
    </form>
  )
}

export default Layout

