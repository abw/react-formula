import React from 'react'
import { CustomisingMenu } from '../../site/Menus.jsx'
import TOC from '../../site/TOC.jsx'

const Home = () =>
  <div>
    <h1>Customising</h1>
    <p className="intro">
      This section of the documentation looks at how you can create your
      own custom components.
    </p>
    <TOC menu={CustomisingMenu}/>
  </div>


export default Home