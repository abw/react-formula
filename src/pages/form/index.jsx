import React             from 'react'
import Properties        from './Properties/index.jsx'
import Reset             from './Reset/index.jsx'
import Submit            from './Submit/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="properties"  element={<Properties/>}/>
    <Route path="reset"       element={<Reset/>}/>
    <Route path="submit"      element={<Submit/>}/>
  </Routes>

export default Field