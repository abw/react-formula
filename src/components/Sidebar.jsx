import React from 'react'
import Link from './Link.jsx'

const Sidebar = () =>
  <>
    <h4>Overview</h4>
    <ul className="menu">
      <li><Link to="/" end text="Home"/></li>
      <li><Link to="getting-started" text="Getting Started"/></li>
    </ul>

    <h4>Examples</h4>
    <ul className="menu">
      <li><Link to="simple" text="Simple Example"/></li>
      <li><Link to="schema" text="Separate Schema"/></li>
      <li><Link to="fields" text="Adding Multiple Fields"/></li>
      <li><Link to="submit" text="Submitting the Form *"/></li>
      <li><Link to="reset"  text="Resetting the Form *"/></li>
      <li><Link to="debug"  text="Debugging"/></li>
      <li><Link to="complete" text="Complete Example"/></li>
    </ul>

    <h4>Input Types</h4>
    <ul className="menu">
      <li><Link to="text" text="Text"/></li>
      <li><Link to="textarea" text="Text Area"/></li>
      <li><Link to="number" text="Number, Date, etc"/></li>
      <li><Link to="checkbox" text="Checkbox"/></li>
      <li><Link to="radio" text="Radio Buttons"/></li>
      <li><Link to="select" text="Select Input"/></li>
    </ul>

    <h4>Bling</h4>
    <ul className="menu">
      <li><Link to="required-optional" text="Required and Optional Tags"/></li>
      <li><Link to="prefix-suffix" text="Prefix and Suffix"/></li>
    </ul>

    <h4>Preparation and Validation</h4>
    <ul className="menu">
      <li><Link to="prepare-value" text="Preparing Values"/></li>
      <li><Link to="validate-field" text="Validating Fields"/></li>
    </ul>

    <h4>Customising</h4>
    <ul className="menu">
      <li><Link to="custom-components" text="Using Custom Components *"/></li>
    </ul>

    <h4>Styling</h4>
    <ul className="menu">
      <li><Link to="styling" text="Styling"/></li>
      <li><Link to="form-styles" text="Form Styles"/></li>
      <li><Link to="field-styles" text="Field Styles"/></li>
      <li><Link to="sass-variables" text="SASS Variables"/></li>
    </ul>
  </>


export default Sidebar