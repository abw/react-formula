import React from 'react'
import Link from '../../site/Link.jsx'

const Home = () =>
  <div>
    <h1>Tutorial</h1>
    <p>
      This section of the documentation provides a guided walk-through of the
      features to get you up and running as quickly as possible.
    </p>
    <ul className="menu">
      <li><Link to="simple-form" text="A Simple Form"/></li>
    </ul>
  </div>


export default Home