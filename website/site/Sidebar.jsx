import React from 'react'
import Link from './Link.jsx'
import Menu from './Menu.jsx'
import { ComponentsMenu, InputsMenu, IntroductionMenu, StylingMenu, TutorialMenu } from './Menus.jsx'
import { date, version } from './Utils.js'
import { ReactComponent as Abw } from '../svg/abw.svg'

const Sidebar = () =>
  <>
    <Menu {...IntroductionMenu}/>
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

    <Menu {...StylingMenu}/>

    <h4>Tests</h4>
    <ul className="menu">
      <li><Link to="/test-form" text="Test Form"/></li>
      <li><Link to="/test-layout" text="Layout Test"/></li>
      <li><Link to="/test-styles" text="Style Test"/></li>
    </ul>
    <footer>
      <div className="notes">
        <div>
          v{version}
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