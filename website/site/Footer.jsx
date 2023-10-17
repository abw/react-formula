import React from 'react'
import { date, version } from './Utils.js'
import { ReactComponent as Abw } from '../svg/abw.svg'

const Footer = () =>
  <footer>
    <div className="flex space center">
      <div>
        React-Formula by Andy Wardley
      </div>
      <a href="https://github.com/abw">
        <Abw/>
      </a>
      <div>
        Version {version} {date}
      </div>
    </div>
  </footer>


export default Footer