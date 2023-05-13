import React from 'react'
import { useTheme } from './Theme.jsx'
import { ReactComponent as Github } from '../svg/github.svg'
import { ReactComponent as Sun } from '../svg/sun.svg'
import { ReactComponent as Moon } from '../svg/moon.svg'

const Controls = () => {
  const { dark, toggleTheme } = useTheme()
  return (
    <div id="controls">
      <a href="https://github.com/abw/react-formula" className="github control">
        <Github/>
        <caption>Github</caption>
      </a>
      <div className="theme control" onClick={toggleTheme}>
        { dark ? <Moon/> : <Sun/> }
        <caption>{ dark ? 'Dark' : 'Light'}</caption>
      </div>
    </div>
  )
}

export default Controls