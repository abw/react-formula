import React, { useState } from 'react'
import Debug from '../../lib/index.jsx'

const ShowDebug = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="show-debug">
      <div className="toggle" onClick={() => setShow(! show)}>
        {show ? 'Hide' : 'Show'} Debugging
      </div>
      { show && <Debug/>}
    </div>
  )
}

export default ShowDebug