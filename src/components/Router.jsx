import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'
import GettingStarted from '../pages/GettingStarted.jsx'
import Why from '../pages/Why.jsx'
/*
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
import Submit from '../pages/Submit.jsx'
import Reset from '../pages/Reset.jsx'
import CustomComponents from '../pages/CustomComponents.jsx'
import Complete from '../pages/Complete.jsx'
import FieldStyles from '../pages/FieldStyles.jsx'
import PrepareValue from '../pages/PrepareValue.jsx'
import Debug from '../pages/Debug.jsx'
import ValidateField from '../pages/ValidateField.jsx'
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
/*
      { path: 'simple',             element: <Simple/> },
      { path: 'schema',             element: <Schema/> },
      { path: 'fields',             element: <Fields/> },
      { path: 'submit',             element: <Submit/> },
      { path: 'reset',              element: <Reset/> },
      { path: 'debug',              element: <Debug/> },
      { path: 'complete',           element: <Complete/> },
      { path: 'text',               element: <Text/> },
      { path: 'textarea',           element: <TextArea/> },
      { path: 'number',             element: <Number/> },
      { path: 'checkbox',           element: <Checkbox/> },
      { path: 'radio',              element: <Radio/> },
      { path: 'select',             element: <Select/> },
      { path: 'required-optional',  element: <RequiredOptional/> },
      { path: 'prefix-suffix',      element: <PrefixSuffix/> },
      { path: 'prepare-value',      element: <PrepareValue/> },
      { path: 'validate-field',     element: <ValidateField/> },
      { path: 'custom-components',  element: <CustomComponents/> },
      { path: 'styling',            element: <Styling/> },
      { path: 'form-styles',        element: <FormStyles/> },
      { path: 'field-styles',       element: <FieldStyles/> },
      { path: 'sass-variables',     element: <SASSVariables/> },
*/
      { path: 'test-form',          element: <TestForm/> },
    ]
  },
])

export default Router