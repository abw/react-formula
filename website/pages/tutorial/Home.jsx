import React            from 'react'
import TOC              from '../../site/TOC.jsx'
import { TutorialMenu } from '../../site/Menus.jsx'

const Home = () =>
  <div>
    <h1>Tutorial</h1>
    <p className="intro">
      This section of the documentation provides a guided walk-through of the
      features without going into too much detail.  The idea is to give you
      an overview of the functionality to get a feel for how it works.
    </p>
    <TOC menu={TutorialMenu} url="/tutorial"/>
  </div>


export default Home