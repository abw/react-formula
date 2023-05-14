import React        from 'react'
import Introduction from './Introduction.jsx'
import Forms        from './Forms.jsx'
import Fields       from './Fields.jsx'
import SASSVars     from './SASSVars.jsx'
import CSSVars      from './CSSVars.jsx'
import { Routes, Route } from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="" exact         element={<Introduction/>}/>
    <Route path="forms"          element={<Forms/>}/>
    <Route path="fields"         element={<Fields/>}/>
    <Route path="css-variables"  element={<CSSVars/>}/>
    <Route path="sass-variables" element={<SASSVars/>}/>
  </Routes>


export default Examples