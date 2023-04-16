import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import Why from '../pages/Why.jsx'
import Examples from '../pages/examples/index.jsx'
import Field from '../pages/field/index.jsx'
import Inputs from '../pages/inputs/index.jsx'
import Options from '../pages/options/index.jsx'
import Styling from '../pages/styling/index.jsx'
import CustomComponents from '../pages/CustomComponents.jsx'
import PrepareValue from '../pages/PrepareValue.jsx'
import ValidateField from '../pages/ValidateField.jsx'
/*
*/
import TestForm from '../test/Form.jsx'

const Router = createBrowserRouter([
  {
    path:     '/',
    element:  <Layout/>,
    children: [
      { path: '/',                  element: <Home/> },
      { path: 'getting-started',    element: <GettingStarted/> },
      { path: 'why',                element: <Why/> },
      { path: 'examples/*',         element: <Examples/> },
      { path: 'field/*',            element: <Field/> },
      { path: 'inputs/*',           element: <Inputs/> },
      { path: 'options/*',          element: <Options/> },
      { path: 'prepare-value',      element: <PrepareValue/> },
      { path: 'validate-field',     element: <ValidateField/> },
      { path: 'custom-components',  element: <CustomComponents/> },
      { path: 'styling/*',          element: <Styling/> },
      { path: 'test-form',          element: <TestForm/> },
    ]
  },
])

export default Router