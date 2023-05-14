import React from 'react'
import { ComponentsMenu } from '../../site/Menus.jsx'
import TOC from '../../site/TOC.jsx'

const Components = () =>
  <div>
    <h1>Components</h1>
    <p>
      This section of the documentation provides detailed information about
      each of the components.
    </p>
    <TOC menu={ComponentsMenu}/>
  </div>

export default Components
