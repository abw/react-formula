import { Form, Field, Reset } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Reset } from '@abw/react-formula'

const OnClick = () =>
  <Form onReset={() => alert('form has been reset')}>
    <Field name="field1" label="Field One"/>
    <Reset
      onClick={
        () => window.alert('Reset was intercepted')
      }
    />
  </Form>

export default OnClick