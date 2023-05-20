import React             from 'react'
import Components        from './Components.jsx'
import Home              from './Home.jsx'
import Input             from './Input/index.jsx'
import Layout            from './Layout/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Customising = () =>
  <Routes>
    <Route path="" end       element={<Home/>}/>
    <Route path="input"      element={<Input/>}/>
    <Route path="layout"     element={<Layout/>}/>
    <Route path="components" element={<Components/>}/>
  </Routes>

export default Customising