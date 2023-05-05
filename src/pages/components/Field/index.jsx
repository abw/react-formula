import React             from 'react'
import Home              from './Home.jsx'
import Properties        from './Properties/index.jsx'
import PrefixSuffix      from './PrefixSuffix/index.jsx'
import OnFocus           from './OnFocus/index.jsx'
import OnBlur            from './OnBlur/index.jsx'
import SetFocus          from './SetFocus/index.jsx'
import SetValue          from './SetValue/index.jsx'
import Reset             from './Reset/index.jsx'
import OnChange          from './OnChange/index.jsx'
import OnValid           from './OnValid/index.jsx'
import OnInvalid         from './OnInvalid/index.jsx'
import PrepareValue      from './PrepareValue/index.jsx'
import Required          from './Required/index.jsx'
import ShowRequired      from './ShowRequired/index.jsx'
import RequiredLabel     from './RequiredLabel/index.jsx'
import RequiredMessage   from './RequiredMessage/index.jsx'
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
    <Route path="onFocus"           element={<OnFocus/>}/>
    <Route path="onBlur"            element={<OnBlur/>}/>
    <Route path="onValid"           element={<OnValid/>}/>
    <Route path="onInvalid"         element={<OnInvalid/>}/>
    <Route path="setFocus"          element={<SetFocus/>}/>
    <Route path="setValue"          element={<SetValue/>}/>
    <Route path="Reset"             element={<Reset/>}/>
    <Route path="onChange"          element={<OnChange/>}/>
    <Route path="prepareValue"      element={<PrepareValue/>}/>
    <Route path="required"          element={<Required/>}/>
    <Route path="requiredMessage"   element={<RequiredMessage/>}/>
    <Route path="showRequired"      element={<ShowRequired/>}/>
    <Route path="requiredLabel"     element={<RequiredLabel/>}/>
    <Route path="showOptional"      element={<ShowOptional/>}/>
    <Route path="optionalLabel"     element={<OptionalLabel/>}/>
    <Route path="validate"          element={<Validate/>}/>
    <Route path="validateOnChange"  element={<ValidateOnChange/>}/>
    <Route path="validateOnBlur"    element={<ValidateOnBlur/>}/>
  </Routes>

export default Field