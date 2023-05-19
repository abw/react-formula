import React        from 'react'
import parseCSSVars from '../../site/ParseCSSVars.js'
import VarsList     from './VarsList.jsx'
import defaults     from '../../../styles/properties/default.scss?raw'
import Link         from '../../site/Link.jsx'

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
  </div>

export default CSSVarsDefault