import React from 'react'
import Icon from '../ui/Icon.jsx'

const Suggest = ({text, children}) =>
  <div className="info alert border flex start small shadow-2">
    <Icon name="info" className="side-icon"/>
    <div>
      {text||children}
    </div>
  </div>

export default Suggest