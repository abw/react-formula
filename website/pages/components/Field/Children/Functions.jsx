import { Form, Field, Layout } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field, Layout } from '@abw/react-formula'

const ChildFunctions = () =>
  <Form>
    <Field
      name="greeting"
      label="Enter a greeting"
    >
      { field =>
        <h2 className="mar-t-none">
          The {field.name} field
        </h2>
      }
      <Layout/>
      { field =>
        <>
          <div>
            Current value is: {field.value}
          </div>
          <div className="flex gap-2 blue mar-t-4">
            <button
              type="button"
              onClick={() => field.setValue('Foo')}
            >
              Foo
            </button>
            <button
              type="button"
              onClick={() => field.setValue('Bar')}
            >
              Bar
            </button>
          </div>
        </>
      }
    </Field>
  </Form>

export default ChildFunctions