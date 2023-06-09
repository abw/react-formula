import React from 'react'
import Form from '../../lib/Form.jsx'
import Debug from '../../lib/Form/Debug.jsx'
import DebugField from '../../lib/Field/Debug.jsx'
import Validate from '../../lib/Test/Validate.jsx'
import Field from '../../lib/Field.jsx'
// import Field from '../../lib/Test/Field.jsx'
// import ValidateField from '../../lib/Test/ValidateField.jsx'
// import DebugField from '../../lib/Test/DebugField.jsx'
import SetField from '../../lib/Test/SetField.jsx'
import SetValid from '../../lib/Test/SetValid.jsx'
import SetInvalid from '../../lib/Test/SetInvalid.jsx'
import SetChanged from '../../lib/Test/SetChanged.jsx'
import Changed from '../../lib/Form/Changed.jsx'
import Reset from '../../lib/Control/Reset.jsx'
// import Reset from '../../lib/Test/Reset.jsx'
// import SetValues from '../../lib/Test/SetValues.jsx'

const fields = {
  foo: {
    label: 'The Foo Field',
  },
  bar: {
    label: 'The BarBar Field',
    default: 101,
  }
}
const values = {
  foo: 'barz',
  id: 123
}

const TestForm = () =>
  <div>
    <h1>Test Form</h1>
    <Form fields={fields} values={values} className="formula debug" debug={true}>
      FORM BODY
      <div>
        <Validate/>
        <SetValid/>
        <SetInvalid/>
        <SetChanged/>
        <Reset/>
      </div>
      {/*
      <Field name="foo" help="This is some help">
        <DebugField/>
        <SetField/>
        <SetField n={20}/>
      </Field>
      */}
      <Field name="bar">
        <DebugField/>
        <SetField/>
        <SetField n={20}/>
      </Field>
      <Changed>
        Form has unsaved changes
      </Changed>
      {/*
      <SetValues/>
      <Reset/>
        <ValidateField/>
        <DebugField/>
      */}
      <Debug showForm={true}/>
    </Form>
    {/*
    <Form fields={fields}>
      <Field name="foo">
        <SetField/>
        <SetField n={20}/>
      </Field>
      <Validate/>
      <Debug/>
    </Form>
    */}
  </div>

export default TestForm