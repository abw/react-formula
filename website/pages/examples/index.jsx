import React    from 'react'
import Simple   from './Simple.jsx'
import Schema   from './Schema.jsx'
import Fields   from './Fields.jsx'
import Complete from './Complete.jsx'
import { Routes, Route } from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="simple"   element={<Simple/>} />
    <Route path="schema"   element={<Schema/>} />
    <Route path="fields"   element={<Fields/>} />
    <Route path="complete" element={<Complete/>} />
  </Routes>

export default Examples