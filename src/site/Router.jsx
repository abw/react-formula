import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import Why from '../pages/Why.jsx'
import Examples from '../pages/examples/index.jsx'
import Field from '../pages/field/index.jsx'
import Form from '../pages/form/index.jsx'
import Inputs from '../pages/inputs/index.jsx'
import Customising from '../pages/customising/index.jsx'
import Styling from '../pages/styling/index.jsx'
import TestForm from '../test/Form.jsx'
import LayoutTest from '../test/Layout.jsx'

const Router = createBrowserRouter(
  [
    {
      path:     '/',
      element:  <Layout/>,
      children: [
        { path: '/',                  element: <Home/> },
        { path: 'getting-started',    element: <GettingStarted/> },
        { path: 'why',                element: <Why/> },
        { path: 'examples/*',         element: <Examples/> },
        { path: 'form/*',             element: <Form/> },
        { path: 'field/*',            element: <Field/> },
        { path: 'inputs/*',           element: <Inputs/> },
        { path: 'customising/*',      element: <Customising/> },
        { path: 'styling/*',          element: <Styling/> },
        { path: 'test-form',          element: <TestForm/> },
        { path: 'test-layout',        element: <LayoutTest/> },
      ]
    },
  ],
  {
    basename: import.meta.env.BASE_URL
  }
)

export default Router