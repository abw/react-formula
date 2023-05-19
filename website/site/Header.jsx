import React from 'react'
import Link from './Link.jsx'
import { Toggle } from '@abw/react-night-and-day'
import { ReactComponent as Github } from '../svg/github.svg'

const Header = () =>
  <header className="site">
    <div className="container">
      <div>
        <Link to="/" text="@abw/react-formula"/>
      </div>
      <div className="controls">
        <Toggle/>
        <a href="https://github.com/abw/react-formula" className="github">
          <Github/>
        </a>
      </div>
    </div>
  </header>

export default Header