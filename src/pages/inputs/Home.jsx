import React from 'react'
import { InputsMenu } from '../../site/Menus.jsx'
import Link from '../../site/Link.jsx'

const Home = () =>
  <div>
    <h1>Inputs</h1>
    <p>
      This section of the documentation provides detailed information about
      different input types.
    </p>
    <ul className="menu">
      { InputsMenu.items.map(
        ([uri, text]) => <li key={uri}>
          <Link to={`/inputs/${uri}`} text={text}></Link></li>
      )}
    </ul>
  </div>

export default Home