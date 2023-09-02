import React from 'react'
import Link from './Link.jsx'
import Icon from '../ui/Icon.jsx'
import { Toggle, useTheme } from '@abw/react-night-and-day'
import { version } from './Utils.js'
import { ReactComponent as Github } from '../svg/github.svg'
import { SIDEBAR, NO_SIDEBAR } from './Constants.js'

const Header = () => {
  const { variant, setVariant } = useTheme()
  return (
    <header>
      <nav>
        <div>
          <Icon
            name="bars"
            className="toggle-sidebar action"
            onClick={() => setVariant(variant === SIDEBAR ? NO_SIDEBAR : SIDEBAR)}
          />
          <Link to="/" className="home mar-l-2" text="React-Formula"/>
          <span className="small mar-l-2">v{version}</span>
        </div>
        <div>
          <a href="https://github.com/abw/react-formula">
            <Github className="night-and-day--icon mar-r-2"/>
          </a>
          <Toggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header