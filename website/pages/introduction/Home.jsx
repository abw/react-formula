import React from 'react'
import TOC from '../../site/TOC.jsx'
import { IntroductionMenu } from '../../site/Menus.jsx'

const Home = () =>
  <div>
    <h1>Getting Started</h1>
    <p className="intro">
      This section of the documentation provides an introduction to{' '}
      <code>@abw/react-formula</code>, showing how to install and start
      using it.
    </p>
    <TOC menu={IntroductionMenu}/>
  </div>

export default Home