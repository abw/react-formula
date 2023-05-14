import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import Why from '../pages/Why.jsx'
import TestForm from '../test/Form.jsx'
import LayoutTest from '../test/Layout.jsx'
import StyleTest from '../test/Styles.jsx'

const Tutorial    = React.lazy(() => import('../pages/tutorial/index.jsx'))
const Components  = React.lazy(() => import('../pages/components/index.jsx'))
const Inputs      = React.lazy(() => import('../pages/inputs/index.jsx'))
const Customising = React.lazy(() => import('../pages/customising/index.jsx'))
const Styling     = React.lazy(() => import('../pages/styling/index.jsx'))

const LazyRoute = ({Element}) => {
  return <React.Suspense fallback={<h3>Loading...</h3>}>
    <Element />
  </React.Suspense>
}

const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/',                  element: <Home/> },
        { path: 'getting-started',    element: <GettingStarted/> },
        { path: 'why',                element: <Why/> },
        { path: 'tutorial/*',         element: <LazyRoute Element={Tutorial}/> },
        { path: 'components/*',       element: <LazyRoute Element={Components}/> },
        { path: 'inputs/*',           element: <LazyRoute Element={Inputs}/> },
        { path: 'customising/*',      element: <LazyRoute Element={Customising}/> },
        { path: 'styling/*',          element: <LazyRoute Element={Styling}/> },
        { path: 'test-form',          element: <TestForm/> },
        { path: 'test-layout',        element: <LayoutTest/> },
        { path: 'test-styles',        element: <StyleTest/> },
        // { path: 'examples/*',         element: <Examples/> },
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router