import React from 'react'
import Link from './Link.jsx'
import Menu from './Menu.jsx'
import { ComponentsMenu, InputsMenu, TutorialMenu } from './Menus.jsx'
import { date, version } from './Utils.js'
import { ReactComponent as Abw } from '../svg/abw.svg'

const Sidebar = () =>
  <>
    <h4>Overview</h4>
    <div className="menu">
      <ul className="menu mar-b-2">
        <li><Link to="/" end text="Home"/></li>
        <li><Link to="/getting-started" text="Getting Started"/></li>
        <li><Link to="/why" text="Why Does This Exist?"/></li>
      </ul>
    </div>

    <Menu {...TutorialMenu}/>
    <Menu {...ComponentsMenu}/>
    <Menu {...InputsMenu}/>

    <Menu
      title="Customising"
      url="/customising"
      items={[
        ['components', 'Custom Components'],
      ]}
    />

    <Menu
      title="Styling"
      url="/styling"
      items={[
        ['forms',     'Form Styles'],
        ['fields',    'Field Styles'],
        ['variables', 'SASS Variables'],
      ]}
    />

    <h4>Tests</h4>
    <ul className="menu">
      <li><Link to="/test-form" text="Test Form"/></li>
      <li><Link to="/test-layout" text="Layout Test"/></li>
      <li><Link to="/test-styles" text="Style Test"/></li>
    </ul>
    <footer>
      <div className="notes">
        <div>
          Version {version}
        </div>
        <a href="https://github.com/abw">
          <Abw/>
        </a>
        <div>
          {date}
        </div>
      </div>
    </footer>

  </>

/*
    <Menu
      title="Form"
      url="/form"
      items={[
        ['properties', 'Properties'],
        ['reset',      'Reset'],
        ['submit',     'Submit'],
        ['controls',   'Controls'],
        ['validation', 'Validation'],
        ['errors',     'Errors'],
        ['debug',      'Debug'],
        ['set',        'Setting Values'],
      ]}
    />

    <Menu
      title="Field"
      url="/field"
      items={[
        ['properties',        'Properties'],
        ['required-optional', 'Required and Optional'],
        ['prefix-suffix',     'Prefix and Suffix'],
        ['focus-blur',        'Focus and Blur'],
        ['onchange',          'onChange'],
        ['prepare-value',     'prepareValue'],
        ['validation',        'Validation'],
      ]}
    />
*/

export default Sidebar