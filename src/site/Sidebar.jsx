import React from 'react'
import Link from './Link.jsx'

const Sidebar = () =>
  <>
    <h4>Overview</h4>
    <ul className="menu">
      <li><Link to="/" end text="Home"/></li>
      <li><Link to="/getting-started" text="Getting Started"/></li>
      <li><Link to="/why" text="Why Does This Exist?"/></li>
    </ul>

    <h4>Examples</h4>
    <ul className="menu">
      <li><Link to="/examples/simple" text="Simple Example"/></li>
      <li><Link to="/examples/schema" text="Separate Schema"/></li>
      <li><Link to="/examples/fields" text="Adding Multiple Fields"/></li>
      <li><Link to="/examples/submit" text="Submitting the Form *"/></li>
      <li><Link to="/examples/reset"  text="Resetting the Form *"/></li>
      <li><Link to="/examples/debug"  text="Debugging"/></li>
      <li><Link to="/examples/complete" text="Complete Example"/></li>
    </ul>

    <h4>Field</h4>
    <ul className="menu">
      <li><Link to="/field/required-optional" text="Required and Optional"/></li>
      <li><Link to="/field/prefix-suffix" text="Prefix and Suffix"/></li>
      <li><Link to="/field/focus-blur" text="Focus and Blur"/></li>
      <li><Link to="/field/onchange" text="onChange"/></li>
      <li><Link to="/field/prepare-value" text="prepareValue"/></li>
      <li><Link to="/field/validation" text="Validation"/></li>
    </ul>

    <h4>Input Types</h4>
    <ul className="menu">
      <li><Link to="/inputs/text" text="Text"/></li>
      <li><Link to="/inputs/textarea" text="Text Area"/></li>
      <li><Link to="/inputs/number" text="Number, Date, etc"/></li>
      <li><Link to="/inputs/checkbox" text="Checkbox"/></li>
      <li><Link to="/inputs/radio" text="Radio Buttons"/></li>
      <li><Link to="/inputs/select" text="Select Input"/></li>
    </ul>

    {/*
    <h4>Options</h4>
    <ul className="menu">
    </ul>
    */}

    <h4>Customising</h4>
    <ul className="menu">
      <li><Link to="custom-components" text="Using Custom Components *"/></li>
    </ul>

    <h4>Styling</h4>
    <ul className="menu">
      <li><Link to="/styling" end       text="Styling"/></li>
      <li><Link to="/styling/forms"     text="Form Styles"/></li>
      <li><Link to="/styling/fields"    text="Field Styles"/></li>
      <li><Link to="/styling/variables" text="SASS Variables"/></li>
    </ul>

    <h4>Tests</h4>
    <ul className="menu">
      <li><Link to="/test-form" text="Test Form"/></li>
    </ul>
  </>


export default Sidebar