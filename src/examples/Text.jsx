import React from 'react'
import { Form, Field, Debug } from '../../lib/index.js'

{/* START */}
// PRETEND: import { Form, Field, Debug } from '@abw/react-formula'

const TextExample = () =>
  <Form>
    <Field name="one"/>
    <Field name="two"   label="A text input with a label"/>
    <Field name="three" label="Another text input"    type="text"/>
    <Field name="four"  label="Text with placeholder" placeholder="Hello World!"/>
    <Field name="money" label="Prefix/Suffix" prefix="$" suffix=".00"/>
    <Debug/>
  </Form>

export default TextExample