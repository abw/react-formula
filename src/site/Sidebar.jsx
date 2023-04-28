import React from 'react'
import Link from './Link.jsx'
import Menu from './Menu.jsx'
import { ComponentsMenu } from './Menus.jsx'

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

    <Menu
      title="Tutorial"
      url="/tutorial"
      items={[
        ['simple-form',         'Defining a Form'],
        ['field-validation',    'Field Validation'],
        ['form-validation',     'Form Validation'],
        ['form-submission',     'Form Submission'],
        ['submission-response', 'Submission Response'],
        ['submission-errors',   'Submission Errors'],
      ]}
    />

    <Menu
      title="Examples"
      url="/examples"
      items={[
        ['simple',    'Simple Example'],
        ['schema',    'Separate Schema'],
        ['fields',    'Adding Multiple Fields'],
        ['complete',  'Complete Example'],
      ]}
    />

    <Menu {...ComponentsMenu}/>

    <Menu
      title="Input Types"
      url="/inputs"
      items={[
        ['text', 'Text'],
        ['textarea', 'Text Area'],
        ['number', 'Number, Date, etc'],
        ['checkbox', 'Checkbox'],
        ['radio', 'Radio Buttons'],
        ['select', 'Select Input'],
      ]}
    />

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
    </ul>
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