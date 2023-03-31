import React from 'react'
import Field from './Field.jsx'
import { splitList } from '../Utils.js'

export const Fields = ({ names, ...props }) =>
  <div>
    { splitList(names).map(
      (name) => <Field key={name} name={name} {...props}/>
    )}
  </div>

export default Fields
