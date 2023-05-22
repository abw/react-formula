import React        from 'react'
import Introduction from './Introduction.jsx'
import Forms        from './Forms.jsx'
import Fields       from './Fields.jsx'
import SASSVars     from './SASSVars.jsx'
import CSSVars      from './CSSVars.jsx'
import CSSClasses   from './CSSClasses.jsx'
import Markup       from './Markup.jsx'
import { Routes, Route } from 'react-router-dom'
import CSSVarsDefault from './CSSVarsDefault.jsx'
import CSSVarsDark from './CSSVarsDark.jsx'

const Examples = () =>
  <Routes>
    <Route path="" exact         element={<Introduction/>}/>
    <Route path="forms"          element={<Forms/>}/>
    <Route path="fields"         element={<Fields/>}/>
    <Route path="css-classes"    element={<CSSClasses/>}/>
    <Route path="css-variables"  element={<CSSVars/>}/>
    <Route path="css-defaults"   element={<CSSVarsDefault/>}/>
    <Route path="css-dark"       element={<CSSVarsDark/>}/>
    <Route path="sass-variables" element={<SASSVars/>}/>
    <Route path="markup"         element={<Markup/>}/>
  </Routes>


export default Examples