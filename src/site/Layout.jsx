import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Controls from './Controls.jsx'
import { useTheme } from './Theme.jsx'

const Layout = () => {
  const { theme } = useTheme()
  return (
    <div id="page" className={theme}>
      <div id="layout">
        <ScrollToTop/>
        <aside id="sidebar">
          <h3>@abw/react-formula</h3>
          <Controls/>
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