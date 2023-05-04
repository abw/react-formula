import React             from 'react'
import Home              from './Home.jsx'
import Properties        from './Properties/index.jsx'
import PrefixSuffix      from './PrefixSuffix/index.jsx'
import OnFocus           from './OnFocus/index.jsx'
import OnBlur            from './OnBlur/index.jsx'
import SetFocus          from './SetFocus/index.jsx'
import OnChange          from './OnChange/index.jsx'
import PrepareValue      from './PrepareValue/index.jsx'
import Required          from './Required/index.jsx'
import ShowRequired      from './ShowRequired/index.jsx'
import RequiredLabel     from './RequiredLabel/index.jsx'
import ShowOptional      from './ShowOptional/index.jsx'
import OptionalLabel     from './OptionalLabel/index.jsx'
import Validate          from './Validate/index.jsx'
import ValidateOnChange  from './ValidateOnChange/index.jsx'
import ValidateOnBlur    from './ValidateOnBlur/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="" end              element={<Home/>}/>
    <Route path="properties"        element={<Properties/>}/>
    <Route path="prefix-suffix"     element={<PrefixSuffix/>}/>
    <Route path="onfocus"           element={<OnFocus/>}/>
    <Route path="onblur"            element={<OnBlur/>}/>
    <Route path="setfocus"          element={<SetFocus/>}/>
    <Route path="onchange"          element={<OnChange/>}/>
    <Route path="preparevalue"      element={<PrepareValue/>}/>
    <Route path="required"          element={<Required/>}/>
    <Route path="showrequired"      element={<ShowRequired/>}/>
    <Route path="requiredlabel"     element={<RequiredLabel/>}/>
    <Route path="showoptional"      element={<ShowOptional/>}/>
    <Route path="optionallabel"     element={<OptionalLabel/>}/>
    <Route path="validate"          element={<Validate/>}/>
    <Route path="validateonchange"  element={<ValidateOnChange/>}/>
    <Route path="validateonblur"    element={<ValidateOnBlur/>}/>
  </Routes>

export default Field