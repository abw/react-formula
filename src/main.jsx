import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router.jsx'
import { RouterProvider, } from 'react-router-dom'
import '../styles/formula.scss'
import '../styles/dev.scss'


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
