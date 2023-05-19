import React from 'react'
import MenuItem from './MenuItem.jsx'

const TOC = ({menu, url=menu.url, title='Table of Contents'}) =>
  <div className="toc">
    <h2>{title}</h2>
    <ul className="menu">
      { menu.items.map(
        (item, n) => <MenuItem key={n} item={item} url={url} showAbout/>
      )}
    </ul>
  </div>

export default TOC