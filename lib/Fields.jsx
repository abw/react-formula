import React from 'react'
import Field from './Field.jsx'
import { splitList } from '@abw/badger-utils'
import { Themed } from './Theme.jsx'

const Fields = ({ names, ...props }) =>
  <>
    { splitList(names).map(
      (name) => <Field key={name} name={name} {...props}/>
    )}
  </>

export default Themed(Fields, 'Form.Fieldset')
