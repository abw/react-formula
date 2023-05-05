import React from 'react'
import URLS from './URLS.jsx'
import { fail } from '@abw/badger-utils'
import { CodeLink } from './Links.jsx'

const SeeAlso = ({links}) =>
  <div className="see-also">
    <h2>See Also</h2>
    <ul className="menu">
      { links.map(
        to => <SeeAlsoLink key={to} to={to}/>
      )}
    </ul>
  </div>

const SeeAlsoLink = ({to}) => {
  const entry = URLS[to] || fail(`Invalid SeeAlso link: ${to}`)
  const { about } = entry
  return (
    <li>
      <CodeLink to={to}/>
      { Boolean(about) &&
        <span className="about">{about}</span>
      }
    </li>
  )
}

export default SeeAlso
