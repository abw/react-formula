import React from 'react'
import Link from './Link.jsx'

const Sidebar = () =>
  <>
    <h4>Overview</h4>
    <ul className="menu">
      <li><Link to="/" end text="Home"/></li>
      <li><Link to="simple" text="Simple Example"/></li>
      <li><Link to="schema" text="Separate Schema"/></li>
      <li><Link to="fields" text="Multiple Fields"/></li>
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
      <li><Link to="required-optional" text="Required and Optional"/></li>
      <li><Link to="prefix-suffix" text="Prefix and Suffix"/></li>
    </ul>
  </>


export default Sidebar