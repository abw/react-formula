import React             from 'react'
import Home              from './Home.jsx'
import Form              from './Form/index.jsx'
import Field             from './Field/index.jsx'
import Fields            from './Fields/index.jsx'
import Fieldset          from './Fieldset/index.jsx'
import Submit            from './Submit/index.jsx'
import Reset             from './Reset/index.jsx'
import Cancel            from './Cancel/index.jsx'
import CancelSubmit      from './CancelSubmit/index.jsx'
import CancelResetSubmit from './CancelResetSubmit/index.jsx'
import ResetSubmit       from './ResetSubmit/index.jsx'
import Changed           from './Changed/index.jsx'
import Errors            from './Errors/index.jsx'
import Debug             from './Debug/index.jsx'
import Layout            from './Layout/index.jsx'
import Input            from './Input/index.jsx'
import Label             from './Label/index.jsx'
import Message           from './Message/index.jsx'
import UseField          from './UseField/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Components = () =>
  <Routes>
    <Route path="" end               element={<Home/>}/>
    <Route path="Form/*"             element={<Form/>}/>
    <Route path="Field/*"            element={<Field/>}/>
    <Route path="Fields"             element={<Fields/>}/>
    <Route path="Fieldset"           element={<Fieldset/>}/>
    <Route path="Submit"             element={<Submit/>}/>
    <Route path="Reset"              element={<Reset/>}/>
    <Route path="Cancel"             element={<Cancel/>}/>
    <Route path="CancelSubmit"       element={<CancelSubmit/>}/>
    <Route path="ResetSubmit"        element={<ResetSubmit/>}/>
    <Route path="CancelResetSubmit"  element={<CancelResetSubmit/>}/>
    <Route path="Changed"            element={<Changed/>}/>
    <Route path="Errors"             element={<Errors/>}/>
    <Route path="Debug"              element={<Debug/>}/>
    <Route path="Layout"             element={<Layout/>}/>
    <Route path="Input"              element={<Input/>}/>
    <Route path="Label"              element={<Label/>}/>
    <Route path="Message"            element={<Message/>}/>
    <Route path="UseField"           element={<UseField/>}/>
    {/*
    <Route path="controls"    element={<Controls/>}/>
    <Route path="validation"  element={<Validation/>}/>
    <Route path="set"         element={<Set/>}/>
    */}
  </Routes>

export default Components