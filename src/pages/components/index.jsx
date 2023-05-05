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
import Label             from './Label/index.jsx'
import Errors            from './Errors/index.jsx'
import Debug             from './Debug/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Components = () =>
  <Routes>
    <Route path="" end                   element={<Home/>}/>
    <Route path="form/*"                 element={<Form/>}/>
    <Route path="field/*"                element={<Field/>}/>
    <Route path="fields/*"               element={<Fields/>}/>
    <Route path="fieldset/*"             element={<Fieldset/>}/>
    <Route path="submit/*"               element={<Submit/>}/>
    <Route path="reset/*"                element={<Reset/>}/>
    <Route path="cancel/*"               element={<Cancel/>}/>
    <Route path="cancel-submit/*"        element={<CancelSubmit/>}/>
    <Route path="reset-submit/*"         element={<ResetSubmit/>}/>
    <Route path="cancel-reset-submit/*"  element={<CancelResetSubmit/>}/>
    <Route path="changed"                element={<Changed/>}/>
    <Route path="label"                  element={<Label/>}/>
    <Route path="errors/*"               element={<Errors/>}/>
    <Route path="debug/*"                element={<Debug/>}/>
    {/*
    <Route path="controls"    element={<Controls/>}/>
    <Route path="validation"  element={<Validation/>}/>
    <Route path="set"         element={<Set/>}/>
    */}
  </Routes>

export default Components