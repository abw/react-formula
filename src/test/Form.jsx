import React from 'react'
import Debug from '../../lib/Form/Debug.jsx'
import Form from '../../lib/Form.jsx'
import Field from '../../lib/Field.jsx'
import Validate from '../../lib/Test/Validate.jsx'
// import Field from '../../lib/Test/Field.jsx'
import ValidateField from '../../lib/Test/ValidateField.jsx'
import DebugField from '../../lib/Test/DebugField.jsx'
//import SetField from '../../lib/Test/SetField.jsx'

const fields = {
  foo: {
    label: 'The Foo Field',
  }
}
const values = {
  foo: 'bar',
  id: 123
}

const TestForm = () =>
  <div>
    <h1>Test Form</h1>
    <Form fields={fields} values={values} className="formula debug">
      <Validate/>
      <Field name="foo" help="This is some help">
        <ValidateField/>
        <DebugField/>
      </Field>
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