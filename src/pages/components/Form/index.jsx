import React        from 'react'
import Home         from './Home.jsx'
import Properties   from './Properties/index.jsx'
import SetFocus     from './SetFocus/index.jsx'
import Validation   from './Validation/index.jsx'
import Set          from './Set/index.jsx'
/*
import Debug             from './Debug/index.jsx'
import Controls          from './Controls/index.jsx'
import Validation        from './Validation/index.jsx'
import Set               from './Set/index.jsx'
*/
import { Routes, Route } from 'react-router-dom'

const Form = () =>
  <Routes>
    <Route path="" end        element={<Home/>}/>
    <Route path="properties"  element={<Properties/>}/>
    <Route path="setfocus"    element={<SetFocus/>}/>
    <Route path="validation"  element={<Validation/>}/>
    <Route path="set/*"         element={<Set/>}/>
    {/*
    <Route path="controls"    element={<Controls/>}/>
    <Route path="set"         element={<Set/>}/>
    <Route path="debug"       element={<Debug/>}/>
    */}
  </Routes>

export default Form