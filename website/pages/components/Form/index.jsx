import React        from 'react'
import Home         from './Home.jsx'
// properties
import Fields       from './properties/fields/index.jsx'
import Values       from './properties/values/index.jsx'
import Hidden       from './properties/hidden/index.jsx'

// validation
import Validate       from './validation/validate/index.jsx'
import ResetOnSuccess from './validation/resetOnSuccess/index.jsx'
import FocusInvalid   from './validation/focusInvalidField/index.jsx'

// events
import OnLoad       from './events/onLoad/index.jsx'
import OnReset      from './events/onReset/index.jsx'
import OnSubmit     from './events/onSubmit/index.jsx'
import OnSuccess    from './events/onSuccess/index.jsx'
import OnError      from './events/onError/index.jsx'

// functions
import Reset        from './functions/reset/index.jsx'
import SetFocus     from './functions/setFocus/index.jsx'
import SetValues    from './functions/setValues/index.jsx'

import Classes      from './classes/index.jsx'
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
      <Route path="fields"          element={<Fields/>}/>
      <Route path="values"          element={<Values/>}/>
      <Route path="hidden"          element={<Hidden/>}/>
      {/* <Route path="children"          element={<Children/>}/> */}
    </Route>
    <Route path="validation">
      <Route path="validate"          element={<Validate/>}/>
      <Route path="focusInvalidField" element={<FocusInvalid/>}/>
      <Route path="resetOnSuccess"    element={<ResetOnSuccess/>}/>
    </Route>
    <Route path="events">
      <Route path="onLoad"            element={<OnLoad/>}/>
      <Route path="onReset"           element={<OnReset/>}/>
      <Route path="onSubmit"          element={<OnSubmit/>}/>
      <Route path="onSuccess"         element={<OnSuccess/>}/>
      <Route path="onError"           element={<OnError/>}/>
    </Route>

    <Route path="functions">
      <Route path="reset"       element={<Reset/>}/>
      <Route path="setFocus"    element={<SetFocus/>}/>
      <Route path="setValues"   element={<SetValues/>}/>
    </Route>

    <Route path="classes"     element={<Classes/>}/>
    {/*
    <Route path="controls"    element={<Controls/>}/>
    <Route path="set"         element={<Set/>}/>
    <Route path="debug"       element={<Debug/>}/>
    */}
  </Routes>

export default Form