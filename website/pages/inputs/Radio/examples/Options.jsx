import { Form, Field } from '../../../../../lib/index.js'

{/* START */}
import React from 'react'
// PRETEND: import { Form, Field } from '@abw/react-formula'

const RadioOptions = () =>
  <Form>
    <Field
      type="radio"
      name="animal"
      label="Radio Buttons"
      options={[
        { value:     'badger',
          text:      'Bobby Badger',
          className: 'bold'
        },
        { value: 'ferret', text: 'Franky Ferret' },
        { value: 'stoat',  text: 'Simon Stoat'   },
        { value: 'weasel', text: 'Willy Weasel'  }
      ]}
    />
  </Form>

export default RadioOptions
