import React        from 'react'
import parseCSSVars from '../../site/ParseCSSVars.js'
import defaults     from '../../../styles/properties/default.scss?raw'
import Link         from '../../site/Link.jsx'
import Pager        from '../../site/Pager/Styling.jsx'
import VarsList     from './VarsList.jsx'

const defaultVars = parseCSSVars(defaults)

const CSSVarsDefault = () =>
  <div>
    <h1>CSS Variables - Defaults</h1>
    <p className="intro">
      These are the default values defined for CSS variables.  Note that
      some of the base units are defined in terms of {' '}
      <Link to="/styling/sass-variables" text="SASS Variables"/>.
    </p>
    <VarsList vars={defaultVars}/>
    <Pager uri="css-defaults"/>
  </div>

export default CSSVarsDefault