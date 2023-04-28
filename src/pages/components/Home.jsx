import React from 'react'
import { ComponentsMenu } from '../../site/Menus.jsx'
import Link from '../../site/Link.jsx'

const Components = () =>
  <div>
    <h1>Components</h1>
    <p>
      This section of the documentation provides detailed information about
      each of the components.
    </p>
    <ul className="menu">
      { ComponentsMenu.items.map(
        ([uri, text]) => <li key={uri}>
          <Link to={`/components/${uri}`} text={text}></Link></li>
      )}
    </ul>
  </div>

export default Components
