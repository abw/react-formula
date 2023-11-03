import React             from 'react'
import Home              from './Home.jsx'
// properties
import Children          from './properties/children/index.jsx'
import Help              from './properties/help/index.jsx'
import Label             from './properties/label/index.jsx'
import Name              from './properties/name/index.jsx'
import Type              from './properties/type/index.jsx'
import Placeholder       from './properties/placeholder/index.jsx'
import Prefix            from './properties/prefix/index.jsx'
import Suffix            from './properties/suffix/index.jsx'
import Wide              from './properties/wide/index.jsx'

// validation
import MinValidateLength from './validation/minValidateLength/index.jsx'
import OptionalLabel     from './validation/optionalLabel/index.jsx'
import PrepareValue      from './validation/prepareValue/index.jsx'
import Required          from './validation/required/index.jsx'
import RequiredLabel     from './validation/requiredLabel/index.jsx'
import RequiredMessage   from './validation/requiredMessage/index.jsx'
import ShowOptional      from './validation/showOptional/index.jsx'
import ShowRequired      from './validation/showRequired/index.jsx'
import Validate          from './validation/validate/index.jsx'
import ValidateOnBlur    from './validation/validateOnBlur/index.jsx'
import ValidateOnChange  from './validation/validateOnChange/index.jsx'
import ValidateOnInvalid from './validation/validateOnInvalid/index.jsx'

// events
import OnBlur            from './events/onBlur/index.jsx'
import OnChange          from './events/onChange/index.jsx'
import OnFocus           from './events/onFocus/index.jsx'
import OnInvalid         from './events/onInvalid/index.jsx'
import OnLoad            from './events/onLoad/index.jsx'
import OnValid           from './events/onValid/index.jsx'

// functions
import Reset             from './functions/reset/index.jsx'
import SetFocus          from './functions/setFocus/index.jsx'
import SetInvalid        from './functions/setInvalid/index.jsx'
import SetValid          from './functions/setValid/index.jsx'
import SetValue          from './functions/setValue/index.jsx'

// components
import LabelComponent    from './components/Label/index.jsx'
import Layout            from './components/Layout/index.jsx'
import Input             from './components/Input/index.jsx'
import Message           from './components/Message/index.jsx'
import UseField          from './components/UseField/index.jsx'

import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="" end              element={<Home/>}/>
    <Route path="properties">
      <Route path="children"          element={<Children/>}/>
      <Route path="help"              element={<Help/>}/>
      <Route path="label"             element={<Label/>}/>
      <Route path="name"              element={<Name/>}/>
      <Route path="placeholder"       element={<Placeholder/>}/>
      <Route path="prefix"            element={<Prefix/>}/>
      <Route path="suffix"            element={<Suffix/>}/>
      <Route path="type"              element={<Type/>}/>
      <Route path="wide"              element={<Wide/>}/>
    </Route>
    <Route path="validation">
      <Route path="minValidateLength" element={<MinValidateLength/>}/>
      <Route path="optionalLabel"     element={<OptionalLabel/>}/>
      <Route path="prepareValue"      element={<PrepareValue/>}/>
      <Route path="required"          element={<Required/>}/>
      <Route path="requiredLabel"     element={<RequiredLabel/>}/>
      <Route path="requiredMessage"   element={<RequiredMessage/>}/>
      <Route path="showOptional"      element={<ShowOptional/>}/>
      <Route path="showRequired"      element={<ShowRequired/>}/>
      <Route path="validate"          element={<Validate/>}/>
      <Route path="validateOnBlur"    element={<ValidateOnBlur/>}/>
      <Route path="validateOnChange"  element={<ValidateOnChange/>}/>
      <Route path="validateOnInvalid" element={<ValidateOnInvalid/>}/>
    </Route>
    <Route path="events">
      <Route path="onBlur"            element={<OnBlur/>}/>
      <Route path="onChange"          element={<OnChange/>}/>
      <Route path="onFocus"           element={<OnFocus/>}/>
      <Route path="onInvalid"         element={<OnInvalid/>}/>
      <Route path="onLoad"            element={<OnLoad/>}/>
      <Route path="onValid"           element={<OnValid/>}/>
    </Route>
    <Route path="functions">
      <Route path="Reset"             element={<Reset/>}/>
      <Route path="setFocus"          element={<SetFocus/>}/>
      <Route path="setInvalid"        element={<SetInvalid/>}/>
      <Route path="setValid"          element={<SetValid/>}/>
      <Route path="setValue"          element={<SetValue/>}/>
    </Route>
    <Route path="components">
      <Route path="Input"             element={<Input/>}/>
      <Route path="Layout"            element={<Layout/>}/>
      <Route path="Label"             element={<LabelComponent/>}/>
      <Route path="Message"           element={<Message/>}/>
      <Route path="UseField"          element={<UseField/>}/>
    </Route>

  </Routes>

export default Field