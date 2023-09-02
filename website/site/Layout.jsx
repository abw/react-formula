import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import { useTheme } from '@abw/react-night-and-day'
import Header from './Header.jsx'

const Layout = () => {
  const { theme, variant } = useTheme()
  const classes = [theme, variant].join(' ')
  return (
    <div id="site" className={classes}>
      <Header/>
      <div id="app">
        <ScrollToTop/>
        <aside>
          <Sidebar/>
        </aside>
        <main id="content">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout