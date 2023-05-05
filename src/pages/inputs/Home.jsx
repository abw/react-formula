import React from 'react'
import MenuItem from '../../site/MenuItem.jsx'
import { InputsMenu } from '../../site/Menus.jsx'

const Home = () =>
  <div>
    <h1>Inputs</h1>
    <p>
      This section of the documentation provides detailed information about
      different input types.
    </p>
    <ul className="menu">
      { console.log('menu: ', InputsMenu.items) }
      { InputsMenu.items.map(
        (item, n) => <MenuItem key={n} item={item} showAbout/>
      )}
    </ul>
  </div>

export default Home