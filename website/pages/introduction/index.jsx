import React              from 'react'
import Home               from './Home.jsx'
import Installation       from './Installation.jsx'
import Styling            from './Styling.jsx'
import FirstForm          from './FirstForm.jsx'
import Why                from './Why.jsx'
import { Routes, Route }  from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="" exact          element={<Home/>}/>
    <Route path="installation"    element={<Installation/>}/>
    <Route path="styling"         element={<Styling/>}/>
    <Route path="first-form"      element={<FirstForm/>}/>
    <Route path="why"             element={<Why/>}/>
  </Routes>


export default Examples