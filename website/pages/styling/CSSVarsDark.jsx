import React        from 'react'
import parseCSSVars from '../../site/ParseCSSVars.js'
import VarsList     from './VarsList.jsx'
import dark         from '../../../styles/properties/dark.scss?raw'
import Link from '../../site/Link.jsx'

const darkVars = parseCSSVars(dark)

const CSSVarsDark = () =>
  <div>
    <h1>CSS Variables - Dark Mode</h1>
    <p className="intro">
      These are the modified values that override the{' '}
      <Link to="/styling/css-defaults" text="default CSS variable values"/>{' '}
      in dark mode.
    </p>
    <VarsList vars={darkVars}/>
  </div>

export default CSSVarsDark