import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import { useTheme } from '@abw/react-night-and-day'
import Header from './Header.jsx'

const Layout = () => {
  const { theme } = useTheme()
  return (
    <div id="page" className={theme}>
      <Header/>
      <div id="layout">
        <ScrollToTop/>
        <aside id="sidebar">
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