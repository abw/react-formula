import React from 'react'
import DefaultErrors from './Errors.jsx'
import { useForm } from './Context.js'

export const Footer = () => {
  const form = useForm()
  const {
    footerClass,
    errorsInFooter,
    Errors=DefaultErrors
  } = form

  return (
    <footer className={footerClass}>
      { Boolean(errorsInFooter) && <Errors/> }
    </footer>
  )
}

export default Footer

