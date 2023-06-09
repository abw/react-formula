import React    from 'react'
import Home     from './Home.jsx'
import Text     from './Text/index.jsx'
import TextArea from './TextArea/index.jsx'
import Checkbox from './Checkbox/index.jsx'
import Radio    from './Radio/index.jsx'
import Select   from './Select/index.jsx'
import Hidden   from './Hidden/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="" end     element={<Home/>}/>
    <Route path="text"     element={<Text/>}/>
    <Route path="textarea" element={<TextArea/>}/>
    <Route path="checkbox" element={<Checkbox/>}/>
    <Route path="radio"    element={<Radio/>}/>
    <Route path="select"   element={<Select/>}/>
    <Route path="hidden"   element={<Hidden/>}/>
  </Routes>


export default Examples