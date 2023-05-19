import React from 'react'
import { InputsMenu } from '../../site/Menus.jsx'
import TOC from '../../site/TOC.jsx'

const Home = () =>
  <div>
    <h1>Inputs</h1>
    <p className="intro">
      This section of the documentation provides detailed information about
      different input types.
    </p>
    <TOC menu={InputsMenu}/>
  </div>

export default Home