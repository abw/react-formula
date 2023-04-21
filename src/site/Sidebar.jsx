import React from 'react'
import Link from './Link.jsx'
import { useResolvedPath } from 'react-router-dom'
import Icon from '../../lib/ui/Icon/index.jsx'

const Sidebar = () =>
  <>
    <h4>Overview</h4>
    <ul className="menu mar-b-2">
      <li><Link to="/" end text="Home"/></li>
      <li><Link to="/getting-started" text="Getting Started"/></li>
      <li><Link to="/why" text="Why Does This Exist?"/></li>
    </ul>

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

    <Menu
      title="Inputs"
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

const Menu = ({ title, url, items=[] }) => {
  const resolved = useResolvedPath()
  const match = resolved.pathname.slice(0, url.length) === url
  const open = match
  return (
    <div className="menu">
      <div className={`flex space menu-head ${open ? 'open' : 'closed'}`}>
        <Link to={url} className="flex center">
          <Icon name={ open ? 'angle-down' : 'angle-right'}/>
          <h4>{title}</h4>
        </Link>
      </div>
      { open &&
        <ul className="menu">
          { items.map(
            ([path, text]) =>
              <li key={path}><Link to={`${url}/${path}`} text={text}/></li>
          )}
        </ul>
      }
    </div>
  )
}

export default Sidebar