import { Form, Field, useForm } from '../../../../../../lib/index.js'

{/* START */}
import React  from 'react'
// PRETEND: import { Form, Field, useForm } from '@abw/react-formula'

const UseFormFocus = () =>
  <Form>
    <Field name="field1" label="Field One"/>
    <Field name="field2" label="Field Two"/>
    <FieldFocusButton name="field1" caption="Focus Field One"/>
    <FieldFocusButton name="field2" caption="Focus Field Two"/>
  </Form>

const FieldFocusButton = ({name, caption}) => {
  const { setFocus } = useForm()
  return (
    <button
      className="btn-blue"
      onClick={ e => { e.preventDefault(); setFocus(name) } }
    >
      {caption}
    </button>
  )
}

export default UseFormFocus