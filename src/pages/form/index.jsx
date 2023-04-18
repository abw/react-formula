import React             from 'react'
import Home              from './Home.jsx'
import Properties        from './Properties/index.jsx'
import Reset             from './Reset/index.jsx'
import Submit            from './Submit/index.jsx'
import Debug             from './Debug/index.jsx'
import Controls          from './Controls/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="" end        element={<Home/>}/>
    <Route path="properties"  element={<Properties/>}/>
    <Route path="reset"       element={<Reset/>}/>
    <Route path="submit"      element={<Submit/>}/>
    <Route path="controls"    element={<Controls/>}/>
    <Route path="debug"       element={<Debug/>}/>
  </Routes>

export default Field