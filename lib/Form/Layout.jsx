import React from 'react'
import { formAttrs } from '../Utils.js'

export const Layout = ({form, children}) => {
  const {
    className='formula',
    validClass='valid',
    invalidClass='invalid',
  } = form
  let classes = [
    className,
    form.valid && validClass,
    form.invalid && invalidClass
  ].filter(i => i).join(' ')

  const attrs = formAttrs(form)

  return (
    <form className={classes} {...attrs}>
      {children}
    </form>
  )
}

export default Layout

