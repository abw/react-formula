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

const Router = createBrowserRouter([
  {
    path:     '/',
    element:  <Layout/>,
    children: [
      { path: '/',                  element: <Home/> },
      { path: 'simple',             element: <Simple/> },
      { path: 'schema',             element: <Schema/> },
      { path: 'fields',             element: <Fields/> },
      { path: 'text',               element: <Text/> },
      { path: 'textarea',           element: <TextArea/> },
      { path: 'number',             element: <Number/> },
      { path: 'checkbox',           element: <Checkbox/> },
      { path: 'radio',              element: <Radio/> },
      { path: 'select',             element: <Select/> },
      { path: 'required-optional',  element: <RequiredOptional/> },
      { path: 'prefix-suffix',      element: <PrefixSuffix/> },
    ]
  },
])

export default Router