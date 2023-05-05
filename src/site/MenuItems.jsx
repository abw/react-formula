import React from 'react'
import { useResolvedPath } from 'react-router-dom'
import MenuItem from './MenuItem.jsx'

export const MenuItems = ({ url, items=[] }) => {
  const resolved = useResolvedPath()
  const prefix   = resolved.pathname.slice(0, url.length + 1)
  const open     = prefix === url + '/' || prefix === url  // better way?
  // console.log(`prefix:${prefix} url:${url} open:${open}`)

  return open &&
    <ul className="menu">
      { items.map(
        (item, n) => <MenuItem key={n} item={item} url={url} open={open}/>
      )}
    </ul>
}

export default MenuItems