import React from 'react'

const Suggest = ({text, children}) =>
  <div className="info alert border">
    {text||children}
  </div>

export default Suggest