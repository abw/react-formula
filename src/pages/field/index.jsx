import React             from 'react'
import FocusBlur         from './FocusBlur/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Field = () =>
  <Routes>
    <Route path="focus-blur"  element={<FocusBlur/>}/>
  </Routes>

export default Field