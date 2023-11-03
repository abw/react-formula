import React        from 'react'
import Home         from './Home.jsx'
// properties
import Fields       from './properties/fields/index.jsx'
import Values       from './properties/values/index.jsx'
import Hidden       from './properties/hidden/index.jsx'
import Validate     from './properties/validate/index.jsx'

// functions
import Reset        from './functions/reset/index.jsx'

import Classes      from './classes/index.jsx'
import SetFocus     from './SetFocus/index.jsx'
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
    <Route path="properties">
      <Route path="fields"      element={<Fields/>}/>
      <Route path="values"      element={<Values/>}/>
      <Route path="hidden"      element={<Hidden/>}/>
      <Route path="validate"    element={<Validate/>}/>
      {/* <Route path="children"          element={<Children/>}/> */}
    </Route>
    <Route path="functions">
      <Route path="reset"       element={<Reset/>}/>
    </Route>

    <Route path="classes"     element={<Classes/>}/>
    <Route path="setfocus"    element={<SetFocus/>}/>
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