import React from 'react'
import Link from './Link.jsx'
import MenuItems from './MenuItems.jsx'
import { useResolvedPath } from 'react-router-dom'
import { useState } from 'react'

export const Menu = ({ title, url, items=[] }) => {
  const resolved = useResolvedPath()
  const [open, setOpen] = useState(
    resolved.pathname.slice(0, url.length) === url
  )
  const toggleOpen = () => setOpen( open => ! open )

  return (
    <details open={open} className="menu">
      <summary onClick={toggleOpen}>
        <Link to={url} text={title}/>
      </summary>
      <div className="menu-body">
        <MenuItems url={url} items={items}/>
      </div>
    </details>
  )
}


export default Menu