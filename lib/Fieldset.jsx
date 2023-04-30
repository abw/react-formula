import React from 'react'
import Fields from './Fields.jsx'
import { Themed } from './Theme.jsx'

const Fieldset = ({
  className='',
  legend,
  children,
  fields,
}) =>
  <fieldset className={className}>
    { Boolean(legend) && <legend>{legend}</legend> }
    { Boolean(fields) && <Fields names={fields}/> }
    { children }
  </fieldset>

export default Themed(Fieldset, 'Form.Fieldset')
