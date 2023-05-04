import React             from 'react'
import Home              from './Home.jsx'
import Properties        from './Properties/index.jsx'
import PrefixSuffix      from './PrefixSuffix/index.jsx'
import FocusBlur         from './FocusBlur/index.jsx'
import OnChange          from './OnChange/index.jsx'
import PrepareValue      from './PrepareValue/index.jsx'
import Required          from './Required/index.jsx'
import ShowRequired      from './ShowRequired/index.jsx'
import RequiredLabel     from './RequiredLabel/index.jsx'
import ShowOptional      from './ShowOptional/index.jsx'
import OptionalLabel     from './OptionalLabel/index.jsx'
import Validation        from './Validation/index.jsx'
import Label             from './Label/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="" end               element={<Home/>}/>
    <Route path="properties"         element={<Properties/>}/>
    <Route path="prefix-suffix"      element={<PrefixSuffix/>}/>
    <Route path="focus-blur"         element={<FocusBlur/>}/>
    <Route path="onchange"           element={<OnChange/>}/>
    <Route path="prepare-value"      element={<PrepareValue/>}/>
    <Route path="required"           element={<Required/>}/>
    <Route path="show-required"      element={<ShowRequired/>}/>
    <Route path="required-label"     element={<RequiredLabel/>}/>
    <Route path="show-optional"      element={<ShowOptional/>}/>
    <Route path="optional-label"     element={<OptionalLabel/>}/>
    <Route path="validation"         element={<Validation/>}/>
    <Route path="label"              element={<Label/>}/>
  </Routes>

export default Field