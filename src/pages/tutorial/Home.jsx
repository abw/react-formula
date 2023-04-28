import React from 'react'
import Link from '../../site/Link.jsx'
import { TutorialMenu } from '../../site/Tutorial.jsx'

const Home = () =>
  <div>
    <h1>Tutorial</h1>
    <p>
      This section of the documentation provides a guided walk-through of the
      features to get you up and running as quickly as possible.
    </p>
    <ul className="menu">
      { TutorialMenu.map(
        ([uri, text]) => <li key={uri}>
          <Link to={`/tutorial/${uri}`} text={text}></Link></li>
      )}
    </ul>
  </div>


export default Home