import React        from 'react'
import Home         from './Home.jsx'
import Fields       from './fields/index.jsx'
import Values       from './values/index.jsx'
import Hidden       from './hidden/index.jsx'
import Classes      from './classes/index.jsx'
import Properties   from './Properties/index.jsx'
import SetFocus     from './SetFocus/index.jsx'
import Validation   from './Validation/index.jsx'
import OnSubmit     from './OnSubmit/index.jsx'
import OnSuccess    from './OnSuccess/index.jsx'
import OnError      from './OnError/index.jsx'
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
    <Route path="fields"      element={<Fields/>}/>
    <Route path="values"      element={<Values/>}/>
    <Route path="hidden"      element={<Hidden/>}/>
    <Route path="classes"     element={<Classes/>}/>
    <Route path="properties"  element={<Properties/>}/>
    <Route path="setfocus"    element={<SetFocus/>}/>
    <Route path="validation"  element={<Validation/>}/>
    <Route path="onSubmit"    element={<OnSubmit/>}/>
    <Route path="onSuccess"   element={<OnSuccess/>}/>
    <Route path="onError"     element={<OnError/>}/>
    <Route path="set/*"         element={<Set/>}/>
    {/*
    <Route path="controls"    element={<Controls/>}/>
    <Route path="set"         element={<Set/>}/>
    <Route path="debug"       element={<Debug/>}/>
    */}
  </Routes>

export default Form