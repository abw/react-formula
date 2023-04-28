import React from 'react'
import Link from './Link.jsx'

const PrevNext = ({prevLink, prevText, nextLink, nextText}) =>
  <div className="flex space">
    <NavLink caption="Previous" text={prevText} link={prevLink}/>
    <NavLink caption="Next"     text={nextText} link={nextLink}/>
  </div>

const NavLink = ({caption, text, link}) =>
  link
    ? <Link to={link} className="prev-next-link">
        <h4>{caption}</h4>
        <p>{text}</p>
      </Link>
    : <div></div>

export default PrevNext