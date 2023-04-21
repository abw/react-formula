import React from 'react'
import DefaultErrors from './Errors.jsx'
import { useForm } from './Context.js'

export const Header = () => {
  const form = useForm()
  const {
    title,
    headerClass,
    errorsInHeader,
    Errors=DefaultErrors
  } = form

  return (
    <header className={headerClass}>
      { Boolean(title) && <h3>{title}</h3> }
      { Boolean(errorsInHeader) && <Errors/> }
    </header>
  )
}

export default Header

