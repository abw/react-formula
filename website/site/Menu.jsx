import React from 'react'
import Link from './Link.jsx'
import Icon from '../../lib/ui/Icon/index.jsx'
import MenuItems from './MenuItems.jsx'
import { useResolvedPath } from 'react-router-dom'

export const Menu = ({ title, url, items=[] }) => {
  const resolved = useResolvedPath()
  const match = resolved.pathname.slice(0, url.length) === url
  const open = match
  return (
    <div className="menu">
      <div className={`flex space menu-head ${open ? 'open' : 'closed'}`}>
        <Link to={url} className="flex center">
          <Icon name={ open ? 'angle-down' : 'angle-right'}/>
          <h4>{title}</h4>
        </Link>
      </div>
      <MenuItems url={url} items={items}/>
    </div>
  )
}


export default Menu