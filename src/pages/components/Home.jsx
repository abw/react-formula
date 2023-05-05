import React from 'react'
import MenuItem from '../../site/MenuItem.jsx'
import { ComponentsMenu } from '../../site/Menus.jsx'

const Components = () =>
  <div>
    <h1>Components</h1>
    <p>
      This section of the documentation provides detailed information about
      each of the components.
    </p>
    <ul className="menu">
      { ComponentsMenu.items.map(
        (item, n) => <MenuItem key={n} item={item} showAbout/>
      )}
    </ul>
  </div>

export default Components
