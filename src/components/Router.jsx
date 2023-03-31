import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import Simple from '../pages/Simple.jsx'
import Text from '../pages/Text.jsx'
import TextArea from '../pages/TextArea.jsx'
import Checkbox from '../pages/Checkbox.jsx'
import Number from '../pages/Number.jsx'
import Radio from '../pages/Radio.jsx'
import Schema from '../pages/Schema.jsx'
import Fields from '../pages/Fields.jsx'
import Select from '../pages/Select.jsx'
import PrefixSuffix from '../pages/PrefixSuffix.jsx'
import RequiredOptional from '../pages/RequiredOptional.jsx'
import Styling from '../pages/Styling.jsx'
import SASSVariables from '../pages/SASSVariables.jsx'
import FormStyles from '../pages/FormStyles.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import Submit from '../pages/Submit.jsx'
import Reset from '../pages/Reset.jsx'
import CustomComponents from '../pages/CustomComponents.jsx'
import Complete from '../pages/Complete.jsx'

const Router = createBrowserRouter([
  {
    path:     '/',
    element:  <Layout/>,
    children: [
      { path: '/',                  element: <Home/> },
      { path: 'getting-started',    element: <GettingStarted/> },
      { path: 'simple',             element: <Simple/> },
      { path: 'complete',           element: <Complete/> },
      { path: 'schema',             element: <Schema/> },
      { path: 'fields',             element: <Fields/> },
      { path: 'submit',             element: <Submit/> },
      { path: 'reset',              element: <Reset/> },
      { path: 'text',               element: <Text/> },
      { path: 'textarea',           element: <TextArea/> },
      { path: 'number',             element: <Number/> },
      { path: 'checkbox',           element: <Checkbox/> },
      { path: 'radio',              element: <Radio/> },
      { path: 'select',             element: <Select/> },
      { path: 'required-optional',  element: <RequiredOptional/> },
      { path: 'prefix-suffix',      element: <PrefixSuffix/> },
      { path: 'custom-components',  element: <CustomComponents/> },
      { path: 'styling',            element: <Styling/> },
      { path: 'form-styles',        element: <FormStyles/> },
      { path: 'sass-variables',     element: <SASSVariables/> },
    ]
  },
])

export default Router