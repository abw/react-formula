import React from 'react'
import Link from './Link.jsx'
import { useResolvedPath } from 'react-router-dom'

export const MenuItems = ({ url, items=[] }) => {
  const resolved = useResolvedPath()
  const prefix   = resolved.pathname.slice(0, url.length)
  const open     = prefix === url
  // console.log(`prefix:${prefix} url:${url} open:${open}`)

  return open &&
    <ul className="menu">
      { items.map(
        ([path, text, submenu]) =>
          <li key={path}>
            <Link to={`${url}/${path}`} text={text}/>
            { submenu && open && <MenuItems {...submenu} url={`${url}/${path}`}/>}
          </li>
      )}
    </ul>
}

export default MenuItems