import React             from 'react'
import Home              from './Home.jsx'
import Properties        from './Properties/index.jsx'
import RequiredOptional  from './RequiredOptional/index.jsx'
import PrefixSuffix      from './PrefixSuffix/index.jsx'
import FocusBlur         from './FocusBlur/index.jsx'
import OnChange          from './OnChange/index.jsx'
import PrepareValue      from './PrepareValue/index.jsx'
import Validation        from './Validation/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="" end               element={<Home/>}/>
    <Route path="properties"         element={<Properties/>}/>
    <Route path="required-optional"  element={<RequiredOptional/>}/>
    <Route path="prefix-suffix"      element={<PrefixSuffix/>}/>
    <Route path="focus-blur"         element={<FocusBlur/>}/>
    <Route path="onchange"           element={<OnChange/>}/>
    <Route path="prepare-value"      element={<PrepareValue/>}/>
    <Route path="validation"         element={<Validation/>}/>
  </Routes>

export default Field