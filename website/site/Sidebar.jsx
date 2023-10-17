import React from 'react'
import Link from './Link.jsx'
import Menu from './Menu.jsx'
import {
  ComponentsMenu, CustomisingMenu, InputsMenu, IntroductionMenu,
  StylingMenu, TutorialMenu
} from './Menus.jsx'

const Sidebar = () =>
  <>
    <Menu {...IntroductionMenu}/>
    <Menu {...TutorialMenu}/>
    <Menu {...ComponentsMenu}/>
    <Menu {...InputsMenu}/>
    <Menu {...CustomisingMenu}/>
    <Menu {...StylingMenu}/>

    <h4 style={{ marginTop: '2rem' }}>Developer Tests</h4>
    <ul className="menu">
      <li><Link to="/test-form" text="Test Form"/></li>
      <li><Link to="/test-layout" text="Layout Test"/></li>
      <li><Link to="/test-styles" text="Style Test"/></li>
      <li><Link to="/test-validate" text="Validation Test"/></li>
    </ul>
  </>

export default Sidebar