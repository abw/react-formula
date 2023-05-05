import React from 'react'
import Link from './Link.jsx'
import { isArray, isString, isObject, fail } from '@abw/badger-utils'
import { CodeLink } from './Links.jsx'
import MenuItems from './MenuItems.jsx'

export const MenuItem = ({ item, open, url='' }) => {
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
    return (
      <li>
        <CodeLink to={item}/>
      </li>
    )
  }
  if (isObject(item) && item.heading) {
    return (
      <li>
        <h4>{item.heading}</h4>
      </li>
    )
  }
  fail(`Invalid menu item: ${item}`)
}

export default MenuItem