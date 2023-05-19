import React             from 'react'
import Home              from './Home.jsx'
import Properties        from './Properties/index.jsx'
import Name              from './Name/index.jsx'
import Label             from './Label/index.jsx'
import Type              from './Type/index.jsx'
import Placeholder       from './Placeholder/index.jsx'
import Help              from './Help/index.jsx'
import Prefix            from './Prefix/index.jsx'
import Suffix            from './Suffix/index.jsx'
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
import MinValidateLength from './MinValidateLength/index.jsx'
import ShowOptional      from './ShowOptional/index.jsx'
import OptionalLabel     from './OptionalLabel/index.jsx'
import Validate          from './Validate/index.jsx'
import ValidateOnChange  from './ValidateOnChange/index.jsx'
import ValidateOnBlur    from './ValidateOnBlur/index.jsx'
import Input             from './Input/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="" end              element={<Home/>}/>
    <Route path="properties"        element={<Properties/>}/>
    <Route path="name"              element={<Name/>}/>
    <Route path="label"             element={<Label/>}/>
    <Route path="type"              element={<Type/>}/>
    <Route path="placeholder"       element={<Placeholder/>}/>
    <Route path="help"              element={<Help/>}/>
    <Route path="prefix"            element={<Prefix/>}/>
    <Route path="suffix"            element={<Suffix/>}/>
    <Route path="required"          element={<Required/>}/>
    <Route path="showRequired"      element={<ShowRequired/>}/>
    <Route path="requiredLabel"     element={<RequiredLabel/>}/>
    <Route path="requiredMessage"   element={<RequiredMessage/>}/>
    <Route path="showOptional"      element={<ShowOptional/>}/>
    <Route path="optionalLabel"     element={<OptionalLabel/>}/>
    <Route path="prepareValue"      element={<PrepareValue/>}/>
    <Route path="validate"          element={<Validate/>}/>
    <Route path="validateOnBlur"    element={<ValidateOnBlur/>}/>
    <Route path="validateOnChange"  element={<ValidateOnChange/>}/>
    <Route path="minValidateLength" element={<MinValidateLength/>}/>
    <Route path="onFocus"           element={<OnFocus/>}/>
    <Route path="onBlur"            element={<OnBlur/>}/>
    <Route path="onChange"          element={<OnChange/>}/>
    <Route path="onValid"           element={<OnValid/>}/>
    <Route path="onInvalid"         element={<OnInvalid/>}/>
    <Route path="setFocus"          element={<SetFocus/>}/>
    <Route path="setValue"          element={<SetValue/>}/>
    <Route path="Reset"             element={<Reset/>}/>
    <Route path="Input"             element={<Input/>}/>
  </Routes>

export default Field