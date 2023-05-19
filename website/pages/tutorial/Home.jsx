import React            from 'react'
import TOC              from '../../site/TOC.jsx'
import { TutorialMenu } from '../../site/Menus.jsx'

const Home = () =>
  <div>
    <h1>Tutorial</h1>
    <p>
      This section of the documentation provides a guided walk-through of the
      features to get you up and running as quickly as possible.
    </p>
    <TOC menu={TutorialMenu} url="/tutorial"/>
  </div>


export default Home