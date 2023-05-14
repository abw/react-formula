import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './site/Router.jsx'
import { RouterProvider, } from 'react-router-dom'
import { ThemeProvider } from './site/Theme.jsx'
import '../styles/formula2.scss'
import '../styles/dev.scss'


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
