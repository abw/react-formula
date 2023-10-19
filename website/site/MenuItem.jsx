import React from 'react'
import Link from './Link.jsx'
import { isArray, isString, isObject, fail } from '@abw/badger-utils'
import { CodeLink } from './Links.jsx'
import MenuItems from './MenuItems.jsx'
import URLS from './URLS.jsx'

/*
export const resolveMenuItem = item => {
  if (isArray(item)) {
    const [path, text, submenu] = item
    return { link: `/${path}`, text, submenu }
  }
  if (isString(item)) {
    const entry = URLS[item] || fail(`Invalid MenuItem specified: ${item}`)
    const { url, code, text } = entry
    return { link: url, text: text ? text : <code>{code}</code> }
  }
  if (isObject(item)) {
    return item
  }
  fail(`Invalid menu item: ${item}`)
}
*/

export const MenuItem = ({ item, open, showAbout=false, url='' }) => {
  if (isArray(item)) {
    const [path, text, submenu] = item
    return (
      <li>
        <Link to={`${url}/${path}`} text={text}/>
        { submenu && open && <MenuItems {...submenu} url={`${url}/${path}`}/>}
      </li>
    )
  }
  if (isString(item)) {
    const entry = URLS[item] || fail(`Invalid MenuItem specified: ${item}`)
    const { about, menu } = entry
    return (
      <li>
        <CodeLink to={item}/>
        { Boolean(showAbout) && Boolean(about) &&
          <span className="about">{about}</span>
        }
        { menu && open && <MenuItems {...menu} url={entry.url}/>}
      </li>
    )
  }
  if (isObject(item) && item.heading) {
    return (
      <li className="heading">
        <h5>{item.heading}</h5>
      </li>
    )
  }
  fail(`Invalid menu item: ${item}`)
}

export default MenuItem