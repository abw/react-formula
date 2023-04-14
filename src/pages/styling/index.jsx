import React        from 'react'
import Introduction from './Introduction.jsx'
import Forms        from './Forms.jsx'
import Fields       from './Fields.jsx'
import Variables    from './Variables.jsx'
import { Routes, Route } from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="" exact       element={<Introduction/>}/>
    <Route path="forms"        element={<Forms/>}/>
    <Route path="fields"       element={<Fields/>}/>
    <Route path="variables"    element={<Variables/>}/>
  </Routes>


export default Examples