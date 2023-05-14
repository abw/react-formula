import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({to, end, text, children, className=''}) =>
  <NavLink to={to} end={end} className={className}>
    {text||children}
  </NavLink>

export default Link